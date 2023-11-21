let frutas = [];
let laticínios = [];
let doces = [];
let congelados = [];

let adicionarItem = "sim";
while (adicionarItem != "não") {
  adicionarItem = prompt(
    "Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'."
  );
  while (adicionarItem != "sim" && adicionarItem != "não") {
    alert("Valor inválido!");
    adicionarItem = prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
    );
  }
  if (adicionarItem === "não") {
    break;
  }
  let comida = prompt("Qual comida você deseja inserir?");
  let categoria = prompt(
    "Em qual categoria você gostaria de adiciona-la? 'frutas', 'laticínios', 'doces' ou 'congelados'?"
  );
  if (categoria === "frutas") {
    frutas.push(comida);
  } else if (categoria === "laticínios") {
    laticínios.push(comida);
  } else if (categoria === "doces") {
    doces.push(comida);
  } else if (categoria === "congelados") {
    congelados.push(comida);
  } else {
    alert("Essa categoria não é válida.");
  }
}
alert(
  `Lista de compras: \n Frutas: ${frutas} \n Laticínios: ${laticínios} \n Doces: ${doces} \n Congelados: ${congelados}.`
);
