import { memo, useEffect, useState } from "react";
import API from "../../api/api";
import Livro from "../Book/Livro";
import Modal from "../Modal/Modal";
import Confirmation from "../confirmation/Confirmation";

const Livros = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState();

  useEffect(() => {
    API.get("/book")
      .then((res) => {
        setLoading(false);
        setBookList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const deleteBook = (book) => {
    API.delete(`/book/${book._id}`)
      .then(() => {
        bookList.filter((b) => b._id !== book._id);
        setBookList([...bookList]);
        setBookToDelete();
        alert("Livro deletado");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (loading) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-10">
        {bookList.length
          ? `Livros cadastrados: ${bookList.length}`
          : "Não há livros cadastrados :("}
      </h1>
      <div className="flex flex-wrap">
        {bookList.map((book) => {
          return (
            <div key={book._id}>
              <Livro
                id={book._id}
                key={book._id}
                name={book.name}
                image={book.image}
                author={book.author}
                handleDelete={() => {
                  setShowDeleteModal(!showDeleteModal);
                  setBookToDelete(book);
                }}
              />
            </div>
          );
        })}
      </div>
      {showDeleteModal ? (
        <Modal>
          <Confirmation
            handleConfirm={() => deleteBook(bookToDelete)}
            handleCancel={() => setShowDeleteModal(!showDeleteModal)}
            borderColor="red-600"
            backgroundColor="red-600"
            textColor="red-600"
            hoverColor="red-700"
          />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Livros);
