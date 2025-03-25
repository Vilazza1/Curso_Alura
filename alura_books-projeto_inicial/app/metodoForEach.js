const elementoParaInserirLivros = document.getElementById("livros");

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = "";
  listaDeLivros.forEach((livro) => {
    let disponidilidade = verificaDisponibilidadeDoLivro(livro);
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponidilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `;
  });
}

function verificaDisponibilidadeDoLivro(livro) {
  if (livro.quantidade > 0) {
    return "livro__imagens";
  } else {
    return "livros__imagens indisponivel";
  }
}
