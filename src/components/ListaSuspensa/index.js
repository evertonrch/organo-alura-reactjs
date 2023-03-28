import "./ListaSuspensa.css";

const ListaSuspensa = function (props) {
  console.log(props);
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select>
        {props.itens.sort().map(function (item, idx) {
          return <option key={idx}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
