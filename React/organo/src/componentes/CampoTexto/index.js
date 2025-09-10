import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  let valor = "Felipe Vilaça";

  const aoDigitado = (evento) => {
    valor = evento.target.value;
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={props.obrigadorio}
        placeholder={placeholderModificado}
      />
    </div>
  );
};

export default CampoTexto;
