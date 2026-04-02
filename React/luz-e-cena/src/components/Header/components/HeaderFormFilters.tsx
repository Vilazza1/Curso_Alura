import SelectorGroup from "../../Selector/SelectorGroup";
import { FaLocationDot } from "react-icons/fa6";
import SelectorOption from "../../Selector/SelectorOption";

const cidades = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Belo Horizonte" },
  { id: 4, nome: "Curitiba" },
  { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id="cidade" icon={<FaLocationDot />}>
        <SelectorOption value="" label="Escolha a sua cidade..." />
        {cidades.map((cidades) => {
          return (
            <SelectorOption
              key={cidades.id}
              value={cidades.nome}
              label={cidades.nome}
            />
          );
        })}
      </SelectorGroup>
    </form>
  );
};

export default HeaderFormFilters;
