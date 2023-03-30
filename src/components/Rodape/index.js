import "./Rodape.css";

const Rodape = function () {
  return (
    <footer className="footer">
      <div className="redes">
        <img src="images/fb.png" alt="Facebook icon" />
        <img src="images/ig.png" alt="Instagram icon" />
        <img src="images/tw.png" alt="Twitter icon" />
      </div>
      <img src="images/logo.png" />
      <div className="owner" style={{ color: "#fff", fontStyle: "italic" }}>
        Desenvolvido por <strong>Alura</strong>.
      </div>
    </footer>
  );
};

export default Rodape;
