import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import CadastroLivro from "./pages/CadastroLivro/CadastroLivro";
import Livros from "./pages/Livros/Livros";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/cadastrar-livro" element={<CadastroLivro />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
