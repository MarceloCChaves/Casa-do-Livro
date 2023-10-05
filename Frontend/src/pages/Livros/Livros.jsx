import { memo, useEffect, useState } from "react";
import API from "../../api/api";
import Livro from "../../components/Book/Livro";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Livros = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/book").then((res) => {
      setLoading(false);
      setBookList(res.data);
    });
  });

  if (loading) {
    return <>Carregando...</>;
  }

  return (
    <div className="flex justify-center h-screen flex-wrap">
      {bookList.length ? (
        <>
          {bookList.map((book) => {
            return (
              <Livro
                key={book._id}
                name={book.name}
                category={book.category}
                image={book.image}
                description={book.description}
                author={book.author}
                year={book.year}
              />
            );
          })}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Não há livros cadastrados</h1>
          <Link to="/">
            <Button
              classes="my-3 px-5 py-3 border-2 border-black"
              type="button"
              text="Voltar a home"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default memo(Livros);
