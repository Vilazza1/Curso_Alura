export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estaComprado = elemento.querySelector(".input-checkbox").checked;

        if (estaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked")
            itemTextoAtualizado.style.textDecoration = "line=trough"
        }
    }
}