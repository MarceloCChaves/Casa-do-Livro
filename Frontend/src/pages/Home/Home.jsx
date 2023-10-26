import Button from "../../components/Button/Button";
import Livros from "../../components/Livros/Livros";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex  justify-around my-5">
          <span className="text-3xl font-bold">Casa do livro</span>
          <Link to="cadastro-livro">
            <Button
              text="+ Adicionar novo livro"
              classes="bg-indigo-900 hover:bg-indigo-800 text-slate-50 p-3 rounded-lg"
            />
          </Link>
        </div>
      </div>
      <hr/>
      <div>
        <Livros />
      </div>
    </div>
  );
};

export default Home;
