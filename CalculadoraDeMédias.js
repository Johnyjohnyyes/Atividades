console.log("media notas")

var n1 = Number(prompt("nota 1"))
var n2 = Number(prompt("nota 2"))
var n3 = Number(prompt("nota 3"))

var total = n1+n2+n3
var media = total/3

if(media>=7){
    console.log("aprovado")
}
else if(media>=5){
    console.log("recuperacao")
}
else{
    console.log("reprovado")
}