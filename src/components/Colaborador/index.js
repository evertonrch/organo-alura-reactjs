import "./Colaborador.css";

const Colaborador = function ({ nome, img, cargo, corFundo, aoDeletar }) {
  return (
    <div className="colaborador">
      <div className="deletar" onClick={aoDeletar}>
        deletar
      </div>
      <div className="cabecalho" style={{ backgroundColor: corFundo }}>
        <img src={img} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
