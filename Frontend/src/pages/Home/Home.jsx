import { Link } from "react-router-dom";
import bookLover from "../../assets/undraw_book_lover_re_rwjy.svg";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="text-3xl font-bold">Casa do livro</h1>
          <Link to="/cadastrar-livro">
            <Button
              classes="bg-red-800 text-white my-3 py-2 px-5 rounded-lg"
              type="button"
              text="Cadastrar livro"
            />
          </Link>
          <Link to="/livros">
            <Button
              classes="bg-green-600 text-white my-3 py-2 px-5 rounded-lg"
              type="button"
              text="Ver livros cadastrados"
            />
          </Link>
        </div>
        <div>
          <img src={bookLover} className="w-52 m-5" alt="Book" />
        </div>
      </div>
    </div>
  );
};

export default Home;
