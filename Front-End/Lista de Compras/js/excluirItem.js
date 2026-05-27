import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    let confitmacao = confirm("Tem certeza que deseja excluir esse item?")

    if(confitmacao){
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

export { excluirItem };