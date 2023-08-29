import { Link } from "react-router-dom";
import bookLover from "../../assets/undraw_book_lover_re_rwjy.svg";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex items-center justify-center p-32 bg-red-600 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white">Casa do livro</h1>
          <div>
            <Link to="/cadastrar-livro">
              <button className="bg-red-800 text-white py-4 px-5 rounded-lg">
                Cadastrar livro
              </button>
            </Link>
            <Link to="/livros">
              <button className="bg-lime-700 text-white py-4 px-5 m-5 rounded-lg">
                Ver livros cadastrados
              </button>
            </Link>
          </div>
        </div>
        <div className="flex">
          <img src={bookLover} className="w-52 m-5" alt="Book" />
        </div>
      </div>
    </div>
  );
};

export default Home;
