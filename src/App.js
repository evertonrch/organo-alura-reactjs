import Banner from "./components/Banner/Banner";

// Renomeando o componente para index não precisa dublicar no import
import CampoTexto from "./components/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto />
      <CampoTexto />
      <CampoTexto />
    </div>
  );
}

export default App;
