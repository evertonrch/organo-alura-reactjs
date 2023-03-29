import "./Colaborador.css";

const Colaborador = function ({ nome, img, cargo }) {
  return (
    <div className="colaborador">
      <div className="cabecalho">
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
