document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Calculadora da Oficina</title>
    <style>
        body { 
            font-family: Arial; 
            text-align: center; 
            padding: 50px; 
            background: #f5f5f5; 
            margin: 0;
        }
        .container {
            max-width: 400px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 { 
            color: #333; 
            margin-bottom: 20px;
        }
        .input-group {
            margin: 15px 0;
        }
        input[type="number"] { 
            padding: 10px; 
            font-size: 18px; 
            border: 2px solid #ddd; 
            border-radius: 5px; 
            width: 120px; 
            text-align: center;
            margin: 0 5px;
        }
        select {
            padding: 10px;
            font-size: 18px;
            border: 2px solid #ddd;
            border-radius: 5px;
            width: 100px;
        }
        button { 
            background: #28a745; 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            font-size: 18px; 
            border-radius: 5px; 
            cursor: pointer; 
            margin-top: 20px;
        }
        button:hover { 
            background: #218838; 
        }
        #resultado {
            margin-top: 30px;
            font-size: 28px;
            font-weight: bold;
            color: #333;
            min-height: 40px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Calculadora da Oficina</h1>
        
        <div class="input-group">
            <input type="number" id="numero1" placeholder="0" min="0">
            <select id="operacao">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">×</option>
                <option value="/">÷</option>
            </select>
            <input type="number" id="numero2" placeholder="0" min="0">
        </div>
        
        <button id="btnCalcular">Calcular</button>
        
        <div id="resultado">Resultado aparecerá aqui</div>
    </div>
`);

var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var operacao = document.getElementById("operacao");
var botaoCalcular = document.getElementById("btnCalcular");
var resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function() {
    var n1 = parseFloat(numero1.value) || 0;
    var n2 = parseFloat(numero2.value) || 0;
    var op = operacao.value;
    var res = calcular(n1, n2, op);
    resultado.innerHTML = "= " + res;
});

function calcular(a, b, oper) {
    if (oper === "+") {
        return a + b;
    } else if (oper === "-") {
        return a - b;
    } else if (oper === "*") {
        return a * b;
    } else if (oper === "/") {
        if (b === 0) {
            return "Erro: Divisão por zero";
        }
        return a / b;
    }
    return 0;
}