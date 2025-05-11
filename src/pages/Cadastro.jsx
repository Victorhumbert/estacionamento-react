import FormReserva from "../components/FormReserva";

export default function Cadastro() {
  const handleSave = (reserva) => {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
  };

  return (
    <div>
      <h2>Cadastro de Reserva</h2>
      <FormReserva onSave={handleSave} />
    </div>
  );
}
