import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";

console.log(window.location);

const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />;

function App() {
  return (
    <div className="App">
      {pagina}
    </div>
  );
}

export default App;
