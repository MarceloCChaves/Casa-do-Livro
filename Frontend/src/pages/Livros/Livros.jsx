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

  return (
    <div className="flex flex-wrap w-full max-w-full">
      {!loading ? (
        bookList.map((book) => {
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
        })
      ) : (
        <>Carregando...</>
      )}
      <Link to="/">
        <Button
          classes="my-3 px-5 py-3 border-2 border-black"
          type="button"
          text="Voltar a home"
        />
      </Link>
    </div>
  );
};

export default memo(Livros);
