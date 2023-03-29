import { useState } from "react";
import Banner from "./components/Banner/Banner";

// Renomeando o componente para index não precisa dublicar no import
// import CampoTexto from "./components/CampoTexto";
import Formulario from "./components/Formulario";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionaNovoColaborador = function (colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoNovoColaborador={(colaborador) =>
          aoAdicionaNovoColaborador(colaborador)
        }
      />
    </div>
  );
}

export default App;
