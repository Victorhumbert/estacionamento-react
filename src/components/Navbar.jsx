import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Listar Vagas</Link> | {' '}
      <Link to="/cadastro">Cadastrar Reserva</Link>
    </nav>
  );
}
