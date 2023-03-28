import "./CampoTexto.css";

// Componente react inicia com letra maiúscula
const CampoTexto = function () {
  return (
    <div className="campo-texto">
      <label>Nome</label>
      <input type="text" placeholder="Digite seu nome..." />
    </div>
  );
};

export default CampoTexto;
