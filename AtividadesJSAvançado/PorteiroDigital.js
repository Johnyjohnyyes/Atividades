document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Porteiro Digital</title>
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
        input[type="number"] { 
            padding: 10px; 
            font-size: 18px; 
            border: 2px solid #ddd; 
            border-radius: 5px; 
            width: 100px; 
            text-align: center;
        }
        button { 
            background: #3498db; 
            color: white; 
            border: none; 
            padding: 12px 25px; 
            font-size: 16px; 
            border-radius: 5px; 
            cursor: pointer; 
            margin-left: 10px;
        }
        button:hover { 
            background: #2980b9; 
        }
        #resultado {
            margin-top: 30px;
            font-size: 24px;
            font-weight: bold;
            padding: 15px;
            border-radius: 5px;
            display: none;
        }
        .permitido {
            background: #d4edda;
            color: #155724;
            border: 2px solid #c3e6cb;
        }
        .proibido {
            background: #f8d7da;
            color: #721c24;
            border: 2px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Porteiro Digital</h1>
        <p>Digite sua idade:</p>
        <input type="number" id="idade" min="0" max="120" placeholder="18">
        <button id="btnVerificar">Verificar</button>
        <div id="resultado"></div>
    </div>
`);

var campoIdade = document.getElementById("idade");
var botaoVerificar = document.getElementById("btnVerificar");
var resultado = document.getElementById("resultado");

botaoVerificar.addEventListener("click", verificarIdade);

function verificarIdade() {
    var idade = parseInt(campoIdade.value);
    
    if (idade >= 18) {
        resultado.innerHTML = "Entrada permitida";
        resultado.className = "permitido";
    } else {
        resultado.innerHTML = "Entrada proibida";
        resultado.className = "proibido";
    }
    
    resultado.style.display = "block";
}