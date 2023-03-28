import Banner from "./components/Banner/Banner";

// Renomeando o componente para index não precisa dublicar no import
// import CampoTexto from "./components/CampoTexto";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;
