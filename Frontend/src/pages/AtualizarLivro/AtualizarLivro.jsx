import { useState, useRef } from "react";
import API from "../../api/api";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { RiCloseFill } from "react-icons/ri";
import Modal from "../../components/Modal/Modal";
import { useParams } from "react-router-dom";

const AtualizarLivro = ({ closeModal }) => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [author, setAuthor] = useState();
  const [year, setYear] = useState();
  const [fileName, setFileName] = useState();
  const params = useParams();

  const inputFileRef = useRef(null);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const iconProps = {
    color: "#000",
    size: 24,
  };

  const body = {
    name: name,
    category: category,
    image: image,
    description: description,
    author: author,
    year: year,
  };

  const resetInputs = () => {
    setName("");
    setCategory("");
    setAuthor("");
    setYear("");
    setImage(null);
    setDescription("");
  };

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    await API.patch(`/book/${params.id}`, body)
      .then(() => {
        alert("livro atualizado");
        resetInputs();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Modal>
      <Link to="/">
        <RiCloseFill
          className="cursor-pointer absolute right-2"
          onClick={closeModal}
          {...iconProps}
        />
      </Link>
      <h1 className="text-3xl font-bold my-2 p-3">Editar livro</h1>
      <form onSubmit={handleUpdateBook}>
        <div className="flex justify-center flex-wrap">
          <div className="flex flex-col">
            <Input
              classes="m-3 p-3 border border-black"
              type="text"
              value={name}
              placeholder="Título"
              onchange={handleChange(setName)}
            />
            <Input
              classes="m-3 p-3 border border-black"
              type="text"
              value={category}
              placeholder="Categoria"
              onchange={handleChange(setCategory)}
            />
            <div className="flex align justify-center flex-wrap">
              <Input
                classes="m-3 p-3 border border-black"
                type="text"
                value={author}
                placeholder="Autor"
                onchange={handleChange(setAuthor)}
              />
              <Input
                classes="m-3 p-3 border border-black"
                type="number"
                value={year}
                placeholder="Lançamento"
                onchange={handleChange(setYear)}
              />
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex justify-between flex-wrap">
          <div
            className="m-3 p-3 h-60 w-44 border-2 bg-white border-indigo-900 input-field"
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
            className="m-3 p-3 border border-black resize-none"
            value={description}
            placeholder="Descrição"
            cols={33}
            rows={8}
            onChange={handleChange(setDescription)}
          />
        </div>
        <div className="flex justify-center">
          <Button
            classes="m-3 px-10 py-3 bg-indigo-900 font-bold text-white rounded-lg"
            type="submit"
            text="Atualizar"
          />
          <Link to="/">
            <Button
              classes="my-3 px-10 py-3 border-2 text-indigo-900 font-bold border-indigo-900 bg-white rounded-lg"
              type="button"
              text="Cancelar"
              onclick={closeModal}
            />
          </Link>
        </div>
      </form>
    </Modal>
  );
};

export default AtualizarLivro;
