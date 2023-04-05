import "./Colaborador.css";
import { AiFillCloseSquare, AiFillStar, AiOutlineStar } from "react-icons/ai";

const Colaborador = function ({
  nome,
  img,
  cargo,
  corFundo,
  aoDeletar,
  id,
  aoFavoritar,
  favorito,
}) {
  console.log("Favorito", favorito);
  const deletarColaboradorPeloId = function () {
    aoDeletar(id);
  };

  const favoritar = function () {
    aoFavoritar(id);
  };

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
    color: "#d4d645",
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
        <div className="favoritar">
          {favorito ? (
            <AiFillStar {...propsFavorito} />
          ) : (
            <AiOutlineStar {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
