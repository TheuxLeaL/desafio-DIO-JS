var nome = prompt("digite o nome do personagem")
var xp = parseInt(prompt("digite a quantidade de xp do personagem"))
if (xp < 1000) {
    console.log("O herói de nome " + nome + " está no elo ferro");
} else if (xp >= 1001 && xp <= 2000){
    console.log("O herói de nome " + nome + " está no elo Bronze");
} else if (xp >= 2001 && xp <= 5000) {
    console.log("O herói de nome " + nome + " está no elo Prata");
} else if (xp >= 6001 && xp <= 7000) {
    console.log("O herói de nome " + nome + " está no elo Ouro");
} else if (xp >= 7001 && xp <= 8000) {
    console.log("O herói de nome " + nome + " está no elo Platina");
} else if (xp >= 8001 && xp <= 9000) {
    console.log("O herói de nome " + nome + " está no elo Ascendente");
} else if (xp >= 9001 && xp <= 10000) {
    console.log("O herói de nome " + nome + " está no elo Imortal");
} else if (xp >= 10001) {
    console.log("O herói de nome " + nome + " está no elo Radiante");
}







