import { useState } from "react";
import "./CampoTexto.css";

// Componente react inicia com letra maiúscula
const CampoTexto = function (props) {
  const placeholderParam = props.placeholder;

  // let value = "Everton";

  const callback = function (e) {
    props.update(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      {/* Aqui espera uma variável js */}
      <input
        value={props.valor}
        onChange={callback}
        required={props.required}
        type="text"
        placeholder={placeholderParam}
      />
    </div>
  );
};

export default CampoTexto;
