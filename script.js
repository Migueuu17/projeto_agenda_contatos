const form = document.getElementById("form-contato");
const contatos = [];
const numeros = [];
const footer = document.getElementById("quant-contatos");

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionarLinha();
  atualizarTabela();
});

function adicionarLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputNumeroContato = document.getElementById("numero-contato");

  if (contatos.includes(inputNomeContato.value)) {
    alert(`O contato ${inputNomeContato.value} ja existe em sua agenda`);
  } else if (numeros.includes(inputNumeroContato.value)) {
    alert(`O número ${inputNumeroContato.value} ja existe em sua agenda`);
  } else {
    contatos.push(inputNomeContato.value);
    numeros.push(inputNumeroContato.value);
    let linha = `<tr id="contato-${contatos.length - 1}">`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td><button onclick="removerContato(${
      contatos.length - 1
    })">X</button></td>`;
    linha += "</tr>";

    linhas += linha;
  }
  inputNomeContato.value = "";
  inputNumeroContato.value = "";
}

function atualizarTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  footer.innerHTML = `${contatos.length}`;
}

function removerContato(index) {
  const contatoRemover = document.getElementById(`contato-${index}`);
  document.querySelector("tbody").removeChild(contatoRemover);
  contatos.splice(index, 1);
  numeros.splice(index, 1);
  linhas = ""; // Limpa as linhas
  for (let i = 0; i < contatos.length; i++) {
    let linha = `<tr id="contato-${i}">`;
    linha += `<td>${contatos[i]}</td>`;
    linha += `<td>${numeros[i]}</td>`;
    linha += `<td><button onclick="removerContato(${i})">X</button></td>`;
    linha += "</tr>";

    linhas += linha;
  }
  atualizarTabela(); // Atualiza a tabela após a remoção
}
