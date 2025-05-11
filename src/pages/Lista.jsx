import { useEffect, useState } from "react";
import ListaVagas from "../components/ListaVagas";

export default function Lista() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reservas")) || [];
    setVagas(stored);
  }, []);

  const handleRemove = (index) => {
    const novasVagas = [...vagas];
    novasVagas.splice(index, 1);
    setVagas(novasVagas);
    localStorage.setItem("reservas", JSON.stringify(novasVagas));
  };

  return (
    <div>
      <h2>Vagas Cadastradas</h2>
      <ListaVagas vagas={vagas} onRemove={handleRemove} />
    </div>
  );
}
