import Colaborador from "../Colaborador";
import "./Time.css";

const Time = function (props) {
  const bgColor = { backgroundColor: props.corSecundaria };
  const borderColor = { borderColor: props.corPrimaria };

  return props.colaboradores.length > 0 ? (
    <section className="time" style={bgColor}>
      <input
        value={props.corSecundaria}
        onChange={(e) => props.mudarCor(e.target.value, props.nome)}
        type="color"
        className="input-color"
      />
      <h3 style={borderColor}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => {
          return (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              img={colaborador.imagem}
              time={colaborador.time}
              corFundo={props.corPrimaria}
              aoDeletar={props.aoDeletar}
              corColaborador={props.corDoColaborador}
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
