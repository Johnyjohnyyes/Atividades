document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Lista de Missões</title>
    <style>
        body { 
            font-family: Arial; 
            max-width: 600px;
            margin: 50px auto; 
            padding: 20px; 
            background: #1a1a2e; 
            color: white;
        }
        .container {
            background: #16213e;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        h1 { 
            text-align: center;
            color: #00d4ff;
            margin-bottom: 30px;
        }
        .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        input[type="text"] { 
            flex: 1;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #0f3460;
            border-radius: 8px;
            background: #0f3460;
            color: white;
        }
        input[type="text"]:focus {
            border-color: #00d4ff;
            outline: none;
        }
        button { 
            background: #00d4ff; 
            color: #16213e; 
            border: none; 
            padding: 12px 25px; 
            font-size: 16px; 
            font-weight: bold;
            border-radius: 8px; 
            cursor: pointer; 
        }
        button:hover { 
            background: #00b8d4; 
        }
        #listaMissoes {
            min-height: 200px;
            background: #0f3460;
            border-radius: 10px;
            padding: 20px;
        }
        .missao {
            padding: 15px;
            margin: 10px 0;
            background: #533483;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
            border-left: 4px solid #00d4ff;
            font-size: 16px;
        }
        .missao:hover {
            background: #5a3f8c;
            transform: translateX(5px);
        }
        .missao.concluida {
            background: #00d4aa;
            color: #16213e;
            text-decoration: line-through;
            border-left-color: #00aa7f;
            opacity: 0.8;
        }
        .vazia {
            text-align: center;
            color: #888;
            font-style: italic;
            padding: 40px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Lista de Missões do Jogo</h1>
        
        <div class="input-group">
            <input type="text" id="novaMissao" placeholder="Digite sua missão..." maxlength="50">
            <button id="btnAdicionar">Adicionar</button>
        </div>
        
        <div id="listaMissoes">
            <div class="vazia">Nenhuma missão adicionada. Comece agora!</div>
        </div>
    </div>
`);

var inputMissao = document.getElementById("novaMissao");
var btnAdicionar = document.getElementById("btnAdicionar");
var listaMissoes = document.getElementById("listaMissoes");

btnAdicionar.addEventListener("click", adicionarMissao);
inputMissao.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        adicionarMissao();
    }
});

function adicionarMissao() {
    var texto = inputMissao.value.trim();
    
    if (texto === "") {
        alert("Digite uma missão!");
        return;
    }
    
    var missaoElemento = document.createElement("div");
    missaoElemento.className = "missao";
    missaoElemento.innerHTML = texto;
    
    missaoElemento.addEventListener("click", function() {
        missaoElemento.classList.toggle("concluida");
    });
    
    listaMissoes.insertBefore(missaoElemento, listaMissoes.firstChild);
    inputMissao.value = "";
    
    if (listaMissoes.children[0].classList.contains("vazia")) {
        listaMissoes.innerHTML = "";
    }
}