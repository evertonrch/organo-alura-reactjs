import Banner from "./components/Banner/Banner";

// Renomeando o componente para index não precisa dublicar no import
import CampoTexto from "./components/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu Nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
      <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
    </div>
  );
}

export default App;
