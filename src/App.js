import { useState } from "react";
import Banner from "./components/Banner/Banner";

// Renomeando o componente para index não precisa dublicar no import
// import CampoTexto from "./components/CampoTexto";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";
import { v4 as uuid4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuid4(),
      nome: "Programação",
      cor: "#57c278",
    },
    {
      id: uuid4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuid4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuid4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuid4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuid4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuid4(),
      nome: "Inovação e Tec",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionaNovoColaborador = function (colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function alteraCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuid4() }]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoNovoColaborador={(colaborador) =>
          aoAdicionaNovoColaborador(colaborador)
        }
      />

      {times.map(function (time) {
        return (
          <Time
            key={time.id}
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
