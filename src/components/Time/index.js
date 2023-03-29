import "./Time.css";

const Time = function (props) {
  const bgColor = { backgroundColor: props.corSecundaria };
  const borderColor = { borderColor: props.corPrimaria };

  return (
    <section className="time" style={bgColor}>
      <h3 style={borderColor}>{props.nome}</h3>
    </section>
  );
};

export default Time;
