import { useState, useRef } from "react";
import API from "../../api/api";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const CadastroLivro = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [fileName, setFileName] = useState("Capa");

  const inputFileRef = useRef(null);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const body = {
    name: name,
    category: category,
    image: image,
    description: description,
    author: author,
    year: year,
  };

  const handleRegisterBook = async (e) => {
    e.preventDefault();
    await API.post("/book", body)
      .then(() => {
        alert("livro cadastrado");
        setName("");
        setCategory("");
        setAuthor("");
        setYear("");
        setImage(null);
        setDescription("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h1 className="font-bold text-center">
        Cadastrar <span className="font-light">livro</span>
      </h1>
      <form onSubmit={handleRegisterBook}>
        <div className="flex justify-center flex-wrap">
          <div className="flex items-center flex-col">
            <Input
              classes="m-3 p-3 border-2 border-black"
              type="text"
              value={name}
              placeholder="Nome"
              onchange={handleChange(setName)}
            />
            <Input
              classes="my-3 p-3 border-2 border-black"
              type="text"
              value={category}
              placeholder="Categoria"
              onchange={handleChange(setCategory)}
            />
          </div>
          <div className="flex items-center flex-col">
            <Input
              classes="my-3 p-3 border-2 border-black"
              type="text"
              value={author}
              placeholder="Autor"
              onchange={handleChange(setAuthor)}
            />
            <Input
              classes="my-3 p-3 border-2 border-black"
              type="number"
              value={year}
              placeholder="Ano de lançamento"
              onchange={handleChange(setYear)}
            />
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <div
            className="my-3 p-3 h-60 w-44 border-2 border-black input-field"
            onClick={() => inputFileRef.current.click()}
          >
            <input
              type="file"
              accept="image/*"
              ref={inputFileRef}
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                }
              }}
            />
            {image ? (
              <img src={image} width={150} height={150} alt={fileName} />
            ) : (
              fileName
            )}
          </div>
          <textarea
            className="m-3 p-3 border-2 border-black"
            value={description}
            placeholder="Descrição"
            cols={50}
            rows={8}
            onChange={handleChange(setDescription)}
          />
        </div>
        <div className="flex justify-center">
          <Button
            classes="m-3 px-10 py-3 border-2 border-black"
            type="submit"
            text="Cadastrar"
          />
          <Link to="/">
            <Button
              classes="my-3 px-5 py-3 border-2 border-black"
              type="button"
              text="Voltar a home"
            />
          </Link>
        </div>
      </form>
    </>
  );
};

export default CadastroLivro;
