import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {

  const [colaboradores, setColadoradores] = useState([])

  const novoColadorador = (colaborador) => {
    console.log(colaborador)
    setColadoradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => novoColadorador(colaborador)}/>
    </div>
  );
}

export default App;
