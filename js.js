
function calcule(){

let gol = document.getElementById("gol1").value;
let gols = document.getElementById("gol2").value;
let tela = document.getElementById("tela");
let resultado = gol - gols


if ((resultado >= 3) || (resultado <= -3)) {
tela.innerHTML = "Foi goleada"
console.log(resultado)
}




}