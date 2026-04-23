import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

type UsuarioGoogle = {
  name: string;
  email: string;
  picture: string;
};

type Props = {
  user: UsuarioGoogle | null;
  setUser: (user: UsuarioGoogle) => void;
};

function Home({ user, setUser }: Props) {
  function handleSuccess(response: { credential?: string }) {
    if (!response.credential) return;

    const userData: UsuarioGoogle = jwtDecode(response.credential);

    setUser(userData);

    alert(`Nome: ${userData.name} \nEmail: ${userData.email}`);
  }

  function handleError() {
    console.log("Erro no login");
  }

  return (
    <div className="container">
      <h1>Área de Login</h1>

      {!user ? (
  <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
) : (
  <div className="profile">
    <img src={user.picture} width={100} />
    <p>{user.name}</p>
    <p>{user.email}</p>
  </div>
)}
    </div>
  );
}

export default Home;