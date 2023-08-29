import { useEffect, useState } from "react";
import API from "../../api/api";
import Livro from "../../components/Book/Livro";

const Livros = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    API.get("/book").then((res) => {
      setBookList(res.data);
    });
  });

  return(
    <>
      {bookList.map((book) => {
        <Livro
          
        />
      })}
    </>
  );
};

export default Livros;
