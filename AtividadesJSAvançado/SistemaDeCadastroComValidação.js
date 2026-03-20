document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Sistema de Cadastro</title>
    <style>
        body { 
            font-family: Arial; 
            max-width: 400px;
            margin: 50px auto; 
            padding: 20px; 
            background: #f8f9fa;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        h1 { 
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        input[type="text"], input[type="email"] { 
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }
        input:focus {
            border-color: #007bff;
            outline: none;
        }
        .erro {
            border-color: #dc3545 !important;
            background: #f8d7da;
        }
        .sucesso {
            border-color: #28a745 !important;
            background: #d4edda;
        }
        .msg-erro {
            color: #dc3545;
            font-size: 14px;
            margin-top: 5px;
            display: none;
        }
        .msg-sucesso {
            color: #28a745;
            font-size: 14px;
            margin-top: 5px;
            display: none;
        }
        button { 
            width: 100%;
            background: #007bff; 
            color: white; 
            border: none; 
            padding: 15px; 
            font-size: 18px; 
            border-radius: 5px; 
            cursor: pointer; 
        }
        button:hover:not(:disabled) { 
            background: #0056b3; 
        }
        button:disabled {
            background: #6c757d;
            cursor: not-allowed;
        }
        #status {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            font-weight: bold;
            display: none;
        }
        .status-valido {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .status-invalido {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cadastro</h1>
        
        <form id="formCadastro">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" placeholder="Digite seu nome">
                <div class="msg-erro" id="erroNome">Nome é obrigatório!</div>
                <div class="msg-sucesso" id="okNome">Nome válido</div>
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="seu@email.com">
                <div class="msg-erro" id="erroEmail">Email deve conter @!</div>
                <div class="msg-sucesso" id="okEmail">Email válido</div>
            </div>
            
            <button type="submit" id="btnCadastrar" disabled>Cadastrar</button>
        </form>
        
        <div id="status"></div>
    </div>
`);

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var btnCadastrar = document.getElementById("btnCadastrar");
var formCadastro = document.getElementById("formCadastro");
var status = document.getElementById("status");

var erroNome = document.getElementById("erroNome");
var okNome = document.getElementById("okNome");
var erroEmail = document.getElementById("erroEmail");
var okEmail = document.getElementById("okEmail");

nome.addEventListener("blur", validarNome);
email.addEventListener("blur", validarEmail);
formCadastro.addEventListener("submit", cadastrar);

function validarNome() {
    var texto = nome.value.trim();
    
    if (texto === "") {
        nome.classList.add("erro");
        nome.classList.remove("sucesso");
        erroNome.style.display = "block";
        okNome.style.display = "none";
        return false;
    } else {
        nome.classList.remove("erro");
        nome.classList.add("sucesso");
        erroNome.style.display = "none";
        okNome.style.display = "block";
        return true;
    }
}

function validarEmail() {
    var texto = email.value.trim();
    
    if (texto === "" || !texto.includes("@")) {
        email.classList.add("erro");
        email.classList.remove("sucesso");
        erroEmail.style.display = "block";
        okEmail.style.display = "none";
        return false;
    } else {
        email.classList.remove("erro");
        email.classList.add("sucesso");
        erroEmail.style.display = "none";
        okEmail.style.display = "block";
        return true;
    }
}

function validarFormulario() {
    var nomeOk = validarNome();
    var emailOk = validarEmail();
    btnCadastrar.disabled = !(nomeOk && emailOk);
}

function cadastrar(e) {
    e.preventDefault();
    
    if (validarNome() && validarEmail()) {
        status.innerHTML = "Cadastro realizado com sucesso!";
        status.className = "status-valido";
        status.style.display = "block";
        formCadastro.reset();
        limparEstilos();
        btnCadastrar.disabled = true;
    }
}

function limparEstilos() {
    nome.classList.remove("erro", "sucesso");
    email.classList.remove("erro", "sucesso");
    erroNome.style.display = "none";
    okNome.style.display = "none";
    erroEmail.style.display = "none";
    okEmail.style.display = "none";
}

nome.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);