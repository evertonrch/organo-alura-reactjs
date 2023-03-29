import "./ListaSuspensa.css";

const ListaSuspensa = function (props) {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={(e) => props.update(e.target.value)}>
        {props.itens.sort().map(function (item, idx) {
          return <option key={idx}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
