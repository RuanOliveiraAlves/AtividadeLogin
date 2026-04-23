import { useState } from "react";

type UsuarioGoogle = {
  name: string;
  email: string;
  picture: string;
};

type Props = {
  user: UsuarioGoogle | null;
};

function Cadastro({ user }: Props) {
  const [nome, setNome] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [telefone, setTelefone] = useState("");



  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const dados = {
      nome,
      email,
      telefone,
    };

    console.log(dados);
    alert(JSON.stringify(dados, null, 2));
  }

  return (
    <div className="container">
      <h1>Cadastro</h1>

      <form onSubmit={handleSubmit}>
  <label>Nome</label>
  <input value={nome} onChange={(e) => setNome(e.target.value)} />

  <label>Email</label>
  <input value={email} onChange={(e) => setEmail(e.target.value)} />

  <label>Telefone</label>
<input
  type="tel"
  placeholder="(21) 99999-9999"
  value={telefone}
  onChange={(e) => setTelefone(e.target.value)}
/>
  <button type="submit">Cadastrar</button>
</form>
    </div>
  );
}

export default Cadastro;