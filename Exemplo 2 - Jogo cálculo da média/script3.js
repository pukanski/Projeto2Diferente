alert("Bem-vindo ao Jogo da Média!");

let quantidade = prompt("Quantos números você quer digitar?");
quantidade = Number(quantidade);

if (quantidade <= 0 || quantidade === null || quantidade === "" || typeof quantidade !== "number") {
  alert("Quantidade inválida. Tente novamente com um número maior que zero.");
} else {
  let soma = 0;

  for (let i = 1; i <= quantidade; i++) {
    let entrada = prompt(`Digite o ${i}º número:`);
    let numero = Number(entrada);

    if (entrada.trim() === "" || entrada === null || isNaN(numero)) {
      alert("Valor inválido. Digite um número.");
      i--; // repetir a rodada
      continue;
    }

    soma += numero;
  }

  let media = soma / quantidade;

  // Aqui está o uso correto da template string com crase:
  alert(`A média calculada entre os ${quantidade} números digitados é: ${media.toFixed(2)}`);
}

function voltarAoMenu() {
  window.location.href = '../index.html';
}