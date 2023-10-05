import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import API from "../../api/api";
import BookTable from "../../components/BookTable/BookTable";
import Button from "../../components/Button/Button";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/book").then((res) => {
      setLoading(false);
      setBookList(res.data);
    });
  });

  const handleEditBook = (book) => {
    console.log(book);
  };

  const handleDeleteBook = (book) => {
    API.delete(`book/${book._id}`)
      .then(() => {
        bookList.filter((b) => b._id !== book._id);
        setBookList([...bookList]);
				alert("Livro deletado")
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (loading) {
    return <>Carregando...</>;
  }

  if (!isAdmin) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex justify-center flex-col h-screen m-5">
			<h1 className="font-bold text-center">
        Area <span className="font-light text-red-600">admin</span>
      </h1>
      {bookList.length ? (
        <>
          <table className="border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-600 p-3">Livro</th>
                <th className="border border-slate-600 p-3">Nome</th>
                <th className="border border-slate-600 p-3">Editar</th>
                <th className="border border-slate-600 p-3">Deletar</th>
              </tr>
            </thead>
            {bookList.map((book) => {
              return (
                <BookTable
                  key={book._id}
                  id={book._id}
                  name={book.name}
                  image={book.image}
                  handleDelete={() => handleDeleteBook(book)}
                  handleEdit={() => handleEditBook(book)}
                />
              );
            })}
          </table>
          <p>{bookList.length} livros cadastrados</p>
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

export default Admin;
