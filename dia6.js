let frutas = [];
let laticínios = [];
let doces = [];
let congelados = [];
let comida = [];
let categoria = "";
let remover = "";

let adcionarItem = "sim";
while (adcionarItem != "não") {
  if (
    frutas.length === 0 &&
    laticínios.length === 0 &&
    doces.length === 0 &&
    congelados.length === 0
  ) {
    adicionarItem = prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'."
    );
  } else {
    adicionarItem = prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda com 'sim', 'não' ou 'remover'."
    );
  }
  while (
    adicionarItem != "sim" &&
    adicionarItem != "não" &&
    adicionarItem != "remover"
  ) {
    alert("Valor inválido!");
    adicionarItem = prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
    );
  }
  if (adicionarItem === "não") {
    break;
  }
  if (adicionarItem === "sim") {
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt(
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
    } else alert("Essa categoria não é válida.");
  } else if (adicionarItem === "remover") {
    if (
      frutas.length === 0 &&
      laticínios.length === 0 &&
      doces.length === 0 &&
      congelados.length === 0
    ) {
      alert("Não há itens na lista!");
    } else {
      remover = prompt(
        `Lista de compras: \n Frutas: ${frutas} \n Laticínios: ${laticínios} \n Doces: ${doces} \n Congelados: ${congelados} \n\nQual produto você deseja remover?`
      );
      if (frutas.indexOf(remover) != -1) {
        frutas.splice(frutas.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (laticínios.indexOf(remover) != -1) {
        laticínios.splice(laticínios.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (doces.indexOf(remover) != -1) {
        doces.splice(doces.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (congelados.indexOf(remover) != -1) {
        congelados.splice(congelados.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (grãos.indexOf(remover) != -1) {
        doces.splice(doces.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else {
        alert(`Item inválido!`);
      }
    }
  }
}
alert(
  `Lista de compras: \n Frutas: ${frutas} \n Laticínios: ${laticínios} \n Doces: ${doces} \n Congelados: ${congelados}.`
);
