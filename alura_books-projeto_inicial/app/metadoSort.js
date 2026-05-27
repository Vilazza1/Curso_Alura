let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco(){
    let livorsOrdenador = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livorsOrdenador)
}