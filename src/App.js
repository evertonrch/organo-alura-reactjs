import { useState } from "react";
import Banner from "./components/Banner/Banner";

// Renomeando o componente para index não precisa dublicar no import
// import CampoTexto from "./components/CampoTexto";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#F8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Tec",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionaNovoColaborador = function (colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  };
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
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
