var nome = prompt("digite o nome do personagem")
var xp = parseInt(prompt("digite a quantidade de xp do personagem"))
if (xp < 1000) {
    console.log("O herói de nome " + nome + " está no elo ferro");
} else if (xp >= 1001 && xp <= 2000){
    console.log("O herói de nome " + nome + " está no elo Bronze");
}