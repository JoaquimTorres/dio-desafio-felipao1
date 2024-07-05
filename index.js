let nome = prompt("Digite o nome do herói: ");
let xp = prompt("Digite a experiência do herói: ")

let classificacao;
if (xp <= 1000) {
    classificacao = "Ferro";
} else if ((xp >= 1001) && (xp <= 2000)) {
    classificacao = "Bronze";
} else if ((xp >= 2001) && (xp <= 5000)) {
    classificacao = "Prata";
} else if ((xp >= 5001) && (xp <= 8000)) {
    classificacao = "Ouro";
} else if ((xp >= 8001) && (xp <= 9000)) {
    classificacao = "Platina";
} else if ((xp >= 9001) && (xp <= 10000)) {
    classificacao = "Ascendente";
} else if (xp >= 10001) {
    classificacao = "Radiante";
}

console.log("O Herói de nome " + nome + "está no nível de " + classificacao + ".");
