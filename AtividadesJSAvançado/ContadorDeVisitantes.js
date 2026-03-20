document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Contador de Gostei</title>
    <style>
        body { 
            font-family: Arial; 
            text-align: center; 
            padding: 50px; 
            background: #f0f8ff; 
            margin: 0;
        }
        h1 { 
            color: #333; 
        }
        button { 
            background: #3498db; 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            font-size: 20px; 
            border-radius: 5px; 
            cursor: pointer; 
        }
        button:hover { 
            background: #2980b9; 
        }
        #numero { 
            color: #27ae60; 
            font-size: 2em; 
            font-weight: bold; 
        }
    </style>
</head>
<body>
    <h1>Total de cliques: <span id="numero">0</span></h1>
    <button id="btnGostei">Gostei 👍</button>
`);

var totalCliques = 0;
var botao = document.getElementById("btnGostei");
var numeroNaTela = document.getElementById("numero");

botao.addEventListener("click", function() {
    totalCliques = totalCliques + 1;
    numeroNaTela.innerHTML = totalCliques;
});