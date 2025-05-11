export default function ListaVagas({ vagas, onRemove }) {
  return (
    <ul>
      {vagas.map((vaga, index) => (
        <li key={index}>
          {vaga.nome} - {vaga.placa} - Vaga {vaga.vaga}
          <button onClick={() => onRemove(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}
