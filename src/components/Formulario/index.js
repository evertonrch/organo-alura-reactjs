import Botao from "../Botao/index,";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { FaPlus } from "react-icons/fa";
import "./Formulario.css";
import { useState } from "react";

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

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const callback = function (e) {
    e.preventDefault();
    console.log("Formulario => ", nome, cargo, imagem, time);
  };

  return (
    <section className="formulario">
      <form onSubmit={callback}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite seu Nome"
          valor={nome}
          update={(valor) => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
          valor={cargo}
          update={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da Imagem"
          valor={imagem}
          update={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={itens}
          valor={time}
          update={(valor) => setTime(valor)}
        />
        <Botao>
          <FaPlus />
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
