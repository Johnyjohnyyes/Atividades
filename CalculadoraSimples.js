console.log("calculadora basica")

var a = Number(prompt("num1"))
var b = Number(prompt("num2"))

console.log("+ - * /")
var sinal = prompt("opcao")

if(sinal=="+"){
    console.log("soma =",a+b)
}
else if(sinal=="-"){
    console.log("menos =",a-b)
}
else if(sinal=="*"){
    console.log("vezes =",a*b)
}
else if(sinal=="/"){
    console.log("divisao =",a/b)
    console.log("resto =",a%b)
}