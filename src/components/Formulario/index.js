import Botao from "../Botao/index,";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { FaPlus } from "react-icons/fa";
import "./Formulario.css";

const Formulario = function () {
  const itens = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Tec",
  ];

  const callback = function (e) {
    e.preventDefault();
    console.log(e);
    console.log("Formulario");
  };

  return (
    <section className="formulario">
      <form onSubmit={callback}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite seu Nome"
        />
        <CampoTexto
          required={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
        />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
        <ListaSuspensa label="Time" itens={itens} />
        <Botao>
          <FaPlus />
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
