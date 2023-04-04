import "./CampoForm.css";

// Componente react inicia com letra maiúscula
const CampoForm = function ({
  valor,
  placeholder,
  required,
  update,
  type = "text",
  label,
}) {
  const callback = function (e) {
    update(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      {/* Aqui espera uma variável js */}
      <input
        type={type}
        value={valor}
        onChange={callback}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoForm;
