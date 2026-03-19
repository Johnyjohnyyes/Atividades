console.log("conta positivos")

var qtd = 0
var c = 0

while(c<5){
    var numero = Number(prompt("digite numero"))
    if(numero>=0){
        qtd++
    }
    c++
}

console.log("positivos:",qtd)