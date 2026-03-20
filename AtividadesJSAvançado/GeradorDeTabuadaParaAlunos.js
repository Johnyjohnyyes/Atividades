document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Gerador de Tabuada</title>
    <style>
        body { 
            font-family: Arial; 
            text-align: center; 
            padding: 50px; 
            background: #e8f4f8; 
            margin: 0;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }
        h1 { 
            color: #333; 
            margin-bottom: 20px;
        }
        input[type="number"] { 
            padding: 12px; 
            font-size: 20px; 
            border: 2px solid #ddd; 
            border-radius: 5px; 
            width: 100px; 
            text-align: center;
        }
        button { 
            background: #20c997; 
            color: white; 
            border: none; 
            padding: 12px 25px; 
            font-size: 18px; 
            border-radius: 5px; 
            cursor: pointer; 
            margin-left: 10px;
        }
        button:hover { 
            background: #1baa7f; 
        }
        #tabuada {
            margin-top: 30px;
            text-align: left;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #dee2e6;
            min-height: 300px;
        }
        .linha-tabuada {
            font-size: 18px;
            padding: 8px 0;
            border-bottom: 1px solid #e9ecef;
        }
        .linha-tabuada:last-child {
            border-bottom: none;
        }
        .numero-grande {
            font-size: 24px;
            font-weight: bold;
            color: #20c997;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Gerador de Tabuada</h1>
        <p>Digite um número (1 a 12):</p>
        <input type="number" id="numero" min="1" max="12" value="2">
        <button id="btnGerar">Gerar Tabuada</button>
        
        <div id="tabuada">
            A tabuada aparecerá aqui...
        </div>
    </div>
`);

var campoNumero = document.getElementById("numero");
var botaoGerar = document.getElementById("btnGerar");
var areaTabuada = document.getElementById("tabuada");

botaoGerar.addEventListener("click", gerarTabuada);

function gerarTabuada() {
    var numero = parseInt(campoNumero.value);
    
    if (numero < 1 || numero > 12 || isNaN(numero)) {
        areaTabuada.innerHTML = "<p style='color: red;'>Digite um número entre 1 e 12!</p>";
        return;
    }
    
    var htmlTabuada = "<h3 class='numero-grande'>" + numero + " x </h3>";
    
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        htmlTabuada += "<div class='linha-tabuada'>" + numero + " x " + i + " = <strong>" + resultado + "</strong></div>";
    }
    
    areaTabuada.innerHTML = htmlTabuada;
}

campoNumero.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        gerarTabuada();
    }
});