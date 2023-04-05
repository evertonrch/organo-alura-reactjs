import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = function (props) {
  return props.colaboradores.length > 0 ? (
    <section
      className="time"
      style={{ backgroundColor: hexToRgba(props.time.cor, "0.6") }}
    >
      <input
        value={props.time.cor}
        onChange={(e) => props.mudarCor(e.target.value, props.time.id)}
        type="color"
        className="input-color"
      />
      <h3 style={{ borderColor: props.time.cor }}>{props.time.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador, idx) => {
          return (
            <Colaborador
              key={idx}
              id={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              img={colaborador.imagem}
              time={colaborador.time}
              corFundo={props.time.cor}
              aoDeletar={props.aoDeletar}
              corColaborador={props.corDoColaborador}
              favorito={colaborador.favorito}
              aoFavoritar={props.aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
