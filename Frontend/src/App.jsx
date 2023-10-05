import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import CadastroLivro from "./pages/CadastroLivro/CadastroLivro";
import Livros from "./pages/Livros/Livros";
import Admin from './pages/Admin/Admin';
import EditarLivro from './pages/EditarLivro/EditarLivro';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/cadastrar-livro" element={<CadastroLivro />} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/admin/:id' element={<EditarLivro/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
