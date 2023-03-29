import "./CampoTexto.css";

// Componente react inicia com letra maiúscula
const CampoTexto = function (props) {
  const placeholderParam = props.placeholder;
  console.log(placeholderParam);
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      {/* Aqui espera uma variável js */}
      <input
        required={props.required}
        type="text"
        placeholder={placeholderParam}
      />
    </div>
  );
};

export default CampoTexto;
