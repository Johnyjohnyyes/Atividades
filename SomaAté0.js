console.log("somador")

var total = 0
var n

while(true){
    n = Number(prompt("numero (0 pra parar)"))
    total = total + n
    if(n==0){
        break
    }
}

console.log("soma =",total)