import { useState } from "react";

export default function FormReserva({ onSave }) {
  const [formData, setFormData] = useState({
    placa: "",
    nome: "",
    apartamento: "",
    bloco: "",
    modelo: "",
    cor: "",
    vaga: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Cadastro realizado com sucesso!");
    onSave && onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Salvar</button>
    </form>
  );
}
