const btnAdicionar = document.querySelector(".app__button--add-task");
const fomrAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const ulTarefas = document.querySelector(".app__section-task-list");
const paragrafoDescricaTarefa = document.querySelector(
  ".app__section-active-task-description"
);

const btnRemoverConcluidas = document.querySelector("#btn-remover-concluidas");
const btnRemoverTodas = document.querySelector("#btn-remover-todas");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function atualizarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function adicionarTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
      <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
  `;

  const paragrafo = document.createElement("p");
  paragrafo.textContent = tarefa.descricao;
  paragrafo.classList.add("app__section-task-list-item-description");

  const button = document.createElement("button");
  button.classList.add("app_button-edit");

  button.onclick = () => {
    const novaDescricao = prompt("Qual é o novo nome da tarefa?");
    if (novaDescricao) {
      paragrafo.textContent = novaDescricao;
      tarefa.descricao = novaDescricao;
      atualizarTarefas();
    }
  };

  const imagemBtn = document.createElement("img");
  imagemBtn.setAttribute("src", "/imagens/edit.png");
  button.append(imagemBtn);

  li.append(svg);
  li.append(paragrafo);
  li.append(button);

  if (tarefa.completa) {
    li.classList.add("app__section-task-list-item-complete");
    button.setAttribute("disabled", "disabled");
  } else {
    li.onclick = () => {
      document
        .querySelectorAll(".app__section-task-list-item-active")
        .forEach((elemento) => {
          elemento.classList.remove("app__section-task-list-item-active");
        });

      if (tarefaSelecionada === tarefa) {
        paragrafoDescricaTarefa.textContent = "";
        tarefaSelecionada = null;
        liTarefaSelecionada = null;
        return;
      }

      tarefaSelecionada = tarefa;
      liTarefaSelecionada = li;
      paragrafoDescricaTarefa.textContent = tarefa.descricao;
      li.classList.add("app__section-task-list-item-active");
    };
  }

  return li;
}

btnAdicionar.addEventListener("click", () => {
  fomrAdicionarTarefa.classList.toggle("hidden");
});

fomrAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefa = {
    descricao: textArea.value,
    completa: false,
  };

  tarefas.push(tarefa);
  const elementoDaTarefa = adicionarTarefa(tarefa);
  ulTarefas.append(elementoDaTarefa);
  atualizarTarefas();
  textArea.value = "";
  fomrAdicionarTarefa.classList.add("hidden");
});

tarefas.forEach((tarefa) => {
  const elementoTarefa = adicionarTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
});

document.addEventListener("focoFinalizado", () => {
  if (tarefaSelecionada && liTarefaSelecionada) {
    liTarefaSelecionada.classList.remove("app__section-task-list-item-active");
    liTarefaSelecionada.classList.add("app__section-task-list-item-complete");
    liTarefaSelecionada
      .querySelector("button")
      .setAttribute("disabled", "disabled");
    tarefaSelecionada.completa = true;
    atualizarTarefas();
  }
});

const removerTarefas = (somenteCompletas) => {
  const seletor = somenteCompletas
    ? ".app__section-task-list-item-complete"
    : ".app__section-task-list-item";
  document.querySelectorAll(seletor).forEach((elemento) => {
    elemento.remove();
  });

  tarefas = somenteCompletas
    ? tarefas.filter((tarefa) => !tarefa.completa)
    : [];

  atualizarTarefas();
};

btnRemoverConcluidas.onclick = () => removerTarefas(true);
btnRemoverTodas.onclick = () => removerTarefas(false);
