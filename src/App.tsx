import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";
import Navbar from "./components/Navbar";
import "./App.css";

type UsuarioGoogle = {
  name: string;
  email: string;
  picture: string;
};

function App() {
  const [user, setUser] = useState<UsuarioGoogle | null>(null);

  return (
    <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home user={user} setUser={setUser} />} />
    <Route path="/sobre" element={<Sobre user={user} />} />
    <Route path="/cadastro" element={<Cadastro user={user} />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;