let destino = prompt(
  "Para qual área gostaria de seguir, Front-End ou Back-End?"
);

let front = "Você quer aprender React ou Vue";
let back = "Você quer aprender C# ou Java?";

if (destino === "Front-End") {
  prompt(front);
} else if (destino === "Back-End") {
  prompt(back);
} else {
  alert("Você não inseriu uma área válida!");
}

let caminho = prompt(
  "Digite 1 para seguir se especializando na área ou 2 para se desenvolver como Fullstack"
);
if (caminho == 1) {
  alert(`Continue se especializando em ${destino}!`);
} else if (caminho == 2) {
  alert(
    "Comece a aprender outras linguagens para se desenvolver como Fullstack!"
  );
} else {
  alert("Você não inseriu um valor válido! Digite 1 ou 2.");
}

let tecnologia = prompt(
  "Tem mais alguma tecnologia que você gostaria de aprender, se especializar ou conhecer? Digite sim ou não."
);
while (tecnologia === "sim") {
  let tecnologias = prompt("Qual tecnologia você gostaria de aprender?");
  alert(`Isso ai! Continue estudando ${tecnologias}.`);
  tecnologia = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender, se especializar ou conhecer? Digite sim ou não."
  );
}
