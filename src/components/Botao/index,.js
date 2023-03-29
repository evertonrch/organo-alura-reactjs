import "./Botao.css";

const Botao = function (props) {
  // Propriedade children, para usar o componente como tag
  return <button className="botao">{props.children}</button>;
};

export default Botao;
