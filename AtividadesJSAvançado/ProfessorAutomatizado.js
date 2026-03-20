document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Professor Automatizado</title>
    <style>
        body { 
            font-family: Arial; 
            text-align: center; 
            padding: 50px; 
            background: #f8f9fa; 
            margin: 0;
        }
        .container {
            max-width: 400px;
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
        .input-group {
            margin: 20px 0;
        }
        input[type="number"] { 
            padding: 12px; 
            font-size: 18px; 
            border: 2px solid #ddd; 
            border-radius: 5px; 
            width: 80px; 
            text-align: center;
            margin: 0 10px;
        }
        button { 
            background: #17a2b8; 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            font-size: 18px; 
            border-radius: 5px; 
            cursor: pointer; 
            margin-top: 10px;
        }
        button:hover { 
            background: #138496; 
        }
        button:disabled {
            background: #ccc;
            cursor: not-allowed;
        }
        #resultado {
            margin-top: 30px;
            font-size: 24px;
            font-weight: bold;
            padding: 20px;
            border-radius: 8px;
            display: none;
            border: 3px solid;
        }
        .aprovado {
            background: #d4edda;
            color: #155724;
            border-color: #28a745;
        }
        .recuperacao {
            background: #fff3cd;
            color: #856404;
            border-color: #ffc107;
        }
        .reprovado {
            background: #f8d7da;
            color: #721c24;
            border-color: #dc3545;
        }
        .erro {
            background: #f8f9fa;
            color: #6c757d;
            border-color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Professor Automatizado</h1>
        <p>Insira as duas notas (0 a 10):</p>
        
        <div class="input-group">
            <input type="number" id="nota1" min="0" max="10" step="0.1" placeholder="0.0">
            <input type="number" id="nota2" min="0" max="10" step="0.1" placeholder="0.0">
        </div>
        
        <button id="btnCalcular">Verificar Média</button>
        
        <div id="resultado"></div>
    </div>
`);

var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var botaoCalcular = document.getElementById("btnCalcular");
var resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", verificarMedia);

nota1.addEventListener("input", validarFormulario);
nota2.addEventListener("input", validarFormulario);

function validarFormulario() {
    var n1 = parseFloat(nota1.value);
    var n2 = parseFloat(nota2.value);
    if (n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n1 !== "" && n2 !== "") {
        botaoCalcular.disabled = false;
    } else {
        botaoCalcular.disabled = true;
    }
}

function verificarMedia() {
    var n1 = parseFloat(nota1.value);
    var n2 = parseFloat(nota2.value);
    
    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
        mostrarResultado("Erro: Notas devem estar entre 0 e 10", "erro");
        return;
    }
    
    var media = calcularMedia(n1, n2);
    var situacao = obterSituacao(media);
    mostrarResultado("Média: " + media.toFixed(1) + " - " + situacao, situacao.toLowerCase());
}

function calcularMedia(a, b) {
    return (a + b) / 2;
}

function obterSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function mostrarResultado(texto, classe) {
    resultado.innerHTML = texto;
    resultado.className = classe;
    resultado.style.display = "block";
}

validarFormulario();