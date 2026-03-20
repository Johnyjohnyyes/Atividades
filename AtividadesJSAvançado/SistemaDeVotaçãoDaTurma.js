document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Sistema de Votação</title>
    <style>
        body { 
            font-family: Arial; 
            text-align: center; 
            padding: 50px; 
            background: #f1f3f4; 
            margin: 0;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 { 
            color: #333; 
            margin-bottom: 10px;
        }
        .subtitulo {
            color: #666;
            margin-bottom: 30px;
        }
        .candidato {
            background: #e9ecef;
            padding: 20px;
            margin: 15px 0;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            border: 3px solid transparent;
        }
        .candidato:hover {
            background: #dee2e6;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .candidato.votado {
            background: #007bff;
            color: white;
            border-color: #0056b3;
        }
        .nome-candidato {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .votos {
            font-size: 28px;
            font-weight: bold;
            color: #007bff;
        }
        #resultado {
            margin-top: 40px;
            padding: 25px;
            border-radius: 10px;
            font-size: 20px;
            font-weight: bold;
            display: none;
            min-height: 60px;
        }
        .vencedor {
            background: #d4edda;
            color: #155724;
            border: 3px solid #28a745;
        }
        .empate {
            background: #fff3cd;
            color: #856404;
            border: 3px solid #ffc107;
        }
        #btnFinalizar {
            background: #6c757d;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
            margin-top: 20px;
        }
        #btnFinalizar:hover {
            background: #5a6268;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sistema de Votação da Turma</h1>
        <p class="subtitulo">Escolha o representante da turma</p>
        
        <div class="candidato" id="candidato1">
            <div class="nome-candidato">Ana Silva</div>
            <div class="votos" id="votos1">0 votos</div>
        </div>
        
        <div class="candidato" id="candidato2">
            <div class="nome-candidato">João Santos</div>
            <div class="votos" id="votos2">0 votos</div>
        </div>
        
        <div class="candidato" id="candidato3">
            <div class="nome-candidato">Maria Oliveira</div>
            <div class="votos" id="votos3">0 votos</div>
        </div>
        
        <button id="btnFinalizar">Finalizar Votação</button>
        <div id="resultado"></div>
    </div>
`);

var votos = [0, 0, 0];
var candidato1 = document.getElementById("candidato1");
var candidato2 = document.getElementById("candidato2");
var candidato3 = document.getElementById("candidato3");
var votos1 = document.getElementById("votos1");
var votos2 = document.getElementById("votos2");
var votos3 = document.getElementById("votos3");
var btnFinalizar = document.getElementById("btnFinalizar");
var resultado = document.getElementById("resultado");

candidato1.addEventListener("click", function() { votar(0, candidato1); });
candidato2.addEventListener("click", function() { votar(1, candidato2); });
candidato3.addEventListener("click", function() { votar(2, candidato3); });

btnFinalizar.addEventListener("click", finalizarVotacao);

function votar(indice, elemento) {
    votos[indice]++;
    atualizarVotos();
    elemento.classList.add("votado");
    
    var totalVotos = votos[0] + votos[1] + votos[2];
    if (totalVotos >= 10) {
        btnFinalizar.disabled = false;
    }
}

function atualizarVotos() {
    votos1.innerHTML = votos[0] + " votos";
    votos2.innerHTML = votos[1] + " votos";
    votos3.innerHTML = votos[2] + " votos";
}

function finalizarVotacao() {
    var maxVotos = Math.max(votos[0], votos[1], votos[2]);
    var vencedores = [];
    
    for (var i = 0; i < 3; i++) {
        if (votos[i] === maxVotos) {
            vencedores.push(i);
        }
    }
    
    var mensagem;
    if (vencedores.length === 1) {
        var vencedor = ["Ana Silva", "João Santos", "Maria Oliveira"][vencedores[0]];
        mensagem = "Vencedor: " + vencedor + " (" + maxVotos + " votos)";
        resultado.className = "vencedor";
    } else {
        mensagem = "Empate! (" + maxVotos + " votos cada)";
        resultado.className = "empate";
    }
    
    resultado.innerHTML = mensagem;
    resultado.style.display = "block";
    
    candidato1.style.pointerEvents = "none";
    candidato2.style.pointerEvents = "none";
    candidato3.style.pointerEvents = "none";
    btnFinalizar.disabled = true;
}