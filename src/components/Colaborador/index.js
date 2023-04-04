import "./Colaborador.css";
import { AiFillCloseSquare } from "react-icons/ai";

const Colaborador = function ({ nome, img, cargo, corFundo, aoDeletar, id }) {
  const deletarColaboradorPeloId = function () {
    aoDeletar(id);
  };

  return (
    <div className="colaborador">
      <AiFillCloseSquare
        className="deletar"
        size={30}
        cursor={"pointer"}
        onClick={deletarColaboradorPeloId}
      />
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
