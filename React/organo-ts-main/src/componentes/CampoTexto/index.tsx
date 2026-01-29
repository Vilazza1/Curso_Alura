import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: "text" | "passaword" | "date" | "email | number";
}

const CampoTexto = ({
  aoAlterado,
  label,
  valor,
  placeholder,
  obrigatorio = false,
  tipo = "text",
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
        type={tipo}
      />
    </div>
  );
};

export default CampoTexto;
