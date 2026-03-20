document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Jogo de Adivinhação</title>
    <style>
        body { 
            font-family: Arial; 
            text-align: center; 
            padding: 50px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white;
            margin: 0;
            min-height: 100vh;
        }
        .container {
            max-width: 400px;
            margin: 0 auto;
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        h1 { 
            margin-bottom: 30px;
            font-size: 2.2em;
        }
        input[type="number"] { 
            padding: 15px; 
            font-size: 20px; 
            border: 2px solid rgba(255,255,255,0.3); 
            border-radius: 10px; 
            width: 120px; 
            text-align: center;
            background: rgba(255,255,255,0.2);
            color: white;
            margin: 0 10px;
        }
        input::placeholder {
            color: rgba(255,255,255,0.7);
        }
        button { 
            background: #ff6b6b; 
            color: white; 
            border: none; 
            padding: 15px 30px; 
            font-size: 18px; 
            border-radius: 10px; 
            cursor: pointer; 
            margin: 10px;
            font-weight: bold;
        }
        button:hover { 
            background: #ff5252; 
            transform: scale(1.05);
        }
        button:disabled {
            background: #666;
            cursor: not-allowed;
            transform: none;
        }
        #mensagem {
            margin: 30px 0;
            font-size: 22px;
            font-weight: bold;
            min-height: 30px;
            padding: 20px;
            border-radius: 10px;
        }
        .alto { background: rgba(255,193,7,0.3); color: #ffc107; border: 2px solid #ffc107; }
        .baixo { background: rgba(40,167,69,0.3); color: #28a745; border: 2px solid #28a745; }
        .acertou { background: rgba(40,167,69,0.6); color: #28a745; border: 2px solid #28a745; }
        #tentativas {
            font-size: 18px;
            margin: 20px 0;
            padding: 10px;
            background: rgba(255,255,255,0.1);
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Jogo de Adivinhação</h1>
        <p>Acertar o número de 1 a 20!</p>
        
        <div>
            <input type="number" id="palpite" min="1" max="20" placeholder="1-20">
            <button id="btnTentar">Tentar</button>
            <button id="btnNovoJogo" disabled>Novo Jogo</button>
        </div>
        
        <div id="tentativas">Tentativas: 0</div>
        <div id="mensagem"></div>
    </div>
`);

var numeroSecreto = Math.floor(Math.random() * 20) + 1;
var tentativas = 0;
var jogoAtivo = true;

var palpite = document.getElementById("palpite");
var btnTentar = document.getElementById("btnTentar");
var btnNovoJogo = document.getElementById("btnNovoJogo");
var mensagem = document.getElementById("mensagem");
var tentativasEl = document.getElementById("tentativas");

btnTentar.addEventListener("click", fazerPalpite);
palpite.addEventListener("keypress", function(e) {
    if (e.key === "Enter") fazerPalpite();
});

btnNovoJogo.addEventListener("click", novoJogo);

function fazerPalpite() {
    if (!jogoAtivo) return;
    
    var p = parseInt(palpite.value);
    
    if (isNaN(p) || p < 1 || p > 20) {
        mostrarMensagem("Digite um número de 1 a 20!", "alto");
        return;
    }
    
    tentativas++;
    atualizarTentativas();
    
    if (p === numeroSecreto) {
        mostrarMensagem("Acertou em " + tentativas + " tentativas!", "acertou");
        finalizarJogo();
    } else if (p > numeroSecreto) {
        mostrarMensagem("Muito alto! Tente um número menor.", "alto");
    } else {
        mostrarMensagem("Muito baixo! Tente um número maior.", "baixo");
    }
    
    palpite.value = "";
    palpite.focus();
}

function mostrarMensagem(texto, tipo) {
    mensagem.innerHTML = texto;
    mensagem.className = tipo;
}

function atualizarTentativas() {
    tentativasEl.innerHTML = "Tentativas: " + tentativas;
}

function finalizarJogo() {
    jogoAtivo = false;
    btnTentar.disabled = true;
    btnNovoJogo.disabled = false;
    palpite.disabled = true;
}

function novoJogo() {
    numeroSecreto = Math.floor(Math.random() * 20) + 1;
    tentativas = 0;
    jogoAtivo = true;
    
    btnTentar.disabled = false;
    btnNovoJogo.disabled = true;
    palpite.disabled = false;
    palpite.focus();
    
    mensagem.innerHTML = "";
    mensagem.className = "";
    atualizarTentativas();
}