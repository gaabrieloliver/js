
// Código com erro (faltam as aspas invertidas)
let nome1 = "Maria";
let idade1 = 25;
console.log('Olá, ${nome1}! Você tem ${idade1} anos.');

// Código correto
let nome = "João";
let idade = 19;
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// condicionais com if, else if, else
let nota = 7;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Bom!");
} else if (nota >= 5) {
  console.log("Regular.");
} else {
  console.log("Insuficiente.");
}

// condicionais utilizando && 

if (nota >= 9) {
  console.log(`Parabéns! Você foi aprovado com distinção. Sua nota foi ${nota}.`);
} else if (nota >= 7 && nota < 9) {
  console.log(`Aprovado! Sua nota foi ${nota}. Continue assim.`);
} else if (nota >= 5 && nota < 7) {
  console.log(`Recuperação. Sua nota foi ${nota}. Estude mais para a próxima.`);
} else {
  console.log(`Reprovado. Sua nota foi ${nota}.`);
}

// condicionais utilizando || ou
let diaDaSemana = "segunda";

if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
  console.log("Final de semana!");
} else {
  console.log("Dia de semana.");
}