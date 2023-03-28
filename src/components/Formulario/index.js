import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = function () {
  return (
    <section className="formulario">
      <form>
        <CampoTexto label="Nome" placeholder="Digite seu Nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
      </form>
    </section>
  );
};

export default Formulario;
