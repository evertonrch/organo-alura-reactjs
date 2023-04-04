import { useState } from "react";
import Banner from "./components/Banner/Banner";

// Renomeando o componente para index não precisa dublicar no import
// import CampoTexto from "./components/CampoTexto";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57c278",
    },
    {
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      nome: "Inovação e Tec",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionaNovoColaborador = function (colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador() {
    console.log("Deletando colaborador");
  }

  function alteraCorDoTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoNovoColaborador={(colaborador) =>
          aoAdicionaNovoColaborador(colaborador)
        }
      />

      {times.map(function (time, idx) {
        return (
          <Time
            key={idx}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            mudarCor={alteraCorDoTime}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
