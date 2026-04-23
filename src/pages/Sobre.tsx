type UsuarioGoogle = {
  name: string;
  email: string;
  picture: string;
};

type Props = {
  user: UsuarioGoogle | null;
};

function Sobre({ user }: Props) {
  return (
  <div className="container">
      <h1>Sobre a dupla</h1>

      {user && (
        <div>
          <img src={user.picture} width={80} />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}

      <hr />

      <div>
        <h2>Integrante 1</h2>
        <p>Nome: Ruan</p>
        <p>Interesses: Programação, treino, tecnologia</p>
        <p>Habilidades: HTML, CSS, JavaScript</p>
      </div>

      <div>
        <h2>Integrante 2</h2>
        <p>Nome: Fulano</p>
        <p>Interesses: ...</p>
        <p>Habilidades: ...</p>
      </div>
    </div>
  );
}

export default Sobre;