const form = document.getElementById("form-contato");
const imgApagar =
  '<img src="./imagens/baseline_clear_black_24dp.png" alt="delete imagem"/>';
const contatos = [];
const numeros = [];

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
    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }
  inputNomeContato.value = "";
  inputNumeroContato.value = "";
}

function atualizarTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
  const footer = document.getElementById("quant-contatos");
  footer.innerHTML = `${contatos.length}`;
}
