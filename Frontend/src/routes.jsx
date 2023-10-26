import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CadastroLivro from "./pages/CadastroLivro/CadastroLivro";
import AtualizarLivro from "./pages/AtualizarLivro/AtualizarLivro";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-livro" element={<CadastroLivro/>} />
        <Route path="/:id" element={<AtualizarLivro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
