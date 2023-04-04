import Botao from "../Botao/index,";
import CampoForm from "../CampoForm";
import ListaSuspensa from "../ListaSuspensa";
import { FaPlus } from "react-icons/fa";
import "./Formulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = function (props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const cbNovoColaborador = function (e) {
    e.preventDefault();
    props.aoNovoColaborador({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const cbNovoTime = (e) => {
    e.preventDefault();
    props.cadastrarTime({ nome: nomeTime, cor: corTime });
    setNomeTime("");
    setCorTime("");
  };

  return (
    <section className="formulario-container">
      <form onSubmit={cbNovoColaborador}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoForm
          required={true}
          label="Nome"
          placeholder="Digite seu Nome"
          valor={nome}
          update={(valor) => setNome(valor)}
        />
        <CampoForm
          required={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
          valor={cargo}
          update={(valor) => setCargo(valor)}
        />
        <CampoForm
          label="Imagem"
          placeholder="Digite o endereço da Imagem"
          valor={imagem}
          update={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={props.times}
          valor={time}
          update={(valor) => setTime(valor)}
        />
        <Botao>
          <FaPlus />
        </Botao>
      </form>
      <form onSubmit={cbNovoTime}>
        <h2>Preencha os dados para criar o card do time</h2>
        <CampoForm
          required
          label="Time"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          update={(valor) => setNomeTime(valor)}
        />
        <CampoForm
          type={"color"}
          required
          label="Cor"
          placeholder="Digite a cor"
          valor={corTime}
          update={(valor) => setCorTime(valor)}
        />
        <Botao>
          <FaPlus />
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
