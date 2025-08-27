import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  
  const times = [
  'Programação',
  'Front-End',
  'Data Science',
  'Devops',
  'UX e Desing',
  'Mobile',
  'Inovação e Gestão'
]

const aoSalvar = (evento) => {
  evento.preventDefault()
  console.log('Form foi submetido')
}

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigadorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigadorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto obrigadorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigadorio={true} label="Time" itens={times}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
