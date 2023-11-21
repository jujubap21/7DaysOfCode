let numeroSecreto = Math.floor(Math.random() * 10 + 1);
let acertou = false;
console.log(numeroSecreto);

for (let tentativas = 0; tentativas < 2; tentativas++) {
  let chute = prompt("Digite um número de 1 a 10");
  if (chute == numeroSecreto) {
    alert("Parabéns, você acertou!");
    acertou = true;
    break;
  }
  alert("Você errou!");
}
if (!acertou) {
  alert(`O número era ${numeroSecreto}!`);
}
