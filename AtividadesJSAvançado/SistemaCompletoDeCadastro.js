document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Sistema Completo de Cadastro</title>
    <style>
        * { box-sizing: border-box; }
        body { 
            font-family: Arial, sans-serif; 
            max-width: 450px;
            margin: 40px auto; 
            padding: 20px; 
            background: #f5f5f5;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            color: #333;
        }
        h1 { text-align: center; margin-bottom: 10px; }
        .subtitulo { text-align: center; color: #666; margin-bottom: 30px; }
        .form-group { margin-bottom: 25px; }
        label { display: block; margin-bottom: 8px; font-weight: bold; }
        input { 
            width: 100%; padding: 12px; font-size: 16px; 
            border: 2px solid #ddd; border-radius: 5px; 
        }
        input:focus { border-color: #007bff; outline: none; }
        input.erro { border-color: #dc3545; background: #f8d7da; }
        input.ok { border-color: #28a745; background: #d4edda; }
        .msg-erro { color: #dc3545; font-size: 14px; margin-top: 5px; display: none; }
        .msg-ok { color: #28a745; font-size: 14px; margin-top: 5px; display: none; }
        button { 
            width: 100%; background: #007bff; color: white; 
            border: none; padding: 15px; font-size: 18px; 
            border-radius: 5px; cursor: pointer; margin-top: 10px;
        }
        button:hover:not(:disabled) { background: #0056b3; }
        button:disabled { background: #6c757d; cursor: not-allowed; }
        #sucesso {
            margin-top: 20px; padding: 20px; border-radius: 5px;
            font-weight: bold; display: none; text-align: center;
        }
        .sucesso-final { 
            background: #d4edda; color: #155724; 
            border: 2px solid #28a745;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sistema de Cadastro</h1>
        <p class="subtitulo">Preencha corretamente todos os campos</p>
        
        <form id="formCadastro">
            <div class="form-group">
                <label>Nome Completo</label>
                <input type="text" id="nome">
                <div class="msg-erro" id="erroNome">Nome deve ter pelo menos 2 caracteres</div>
                <div class="msg-ok" id="okNome">OK</div>
            </div>
            
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="email">
                <div class="msg-erro" id="erroEmail">Email deve conter @ e .</div>
                <div class="msg-ok" id="okEmail">OK</div>
            </div>
            
            <div class="form-group">
                <label>Idade</label>
                <input type="number" id="idade" min="1">
                <div class="msg-erro" id="erroIdade">Idade deve ser 18 ou mais</div>
                <div class="msg-ok" id="okIdade">OK</div>
            </div>
            
            <div class="form-group">
                <label>Senha</label>
                <input type="password" id="senha">
                <div class="msg-erro" id="erroSenha">Senha deve ter 8+ caracteres</div>
                <div class="msg-ok" id="okSenha">OK</div>
            </div>
            
            <div class="form-group">
                <label>Confirmar Senha</label>
                <input type="password" id="confirmaSenha">
                <div class="msg-erro" id="erroConfirma">Senhas não coincidem</div>
                <div class="msg-ok" id="okConfirma">OK</div>
            </div>
            
            <button type="submit" id="btnCadastrar" disabled>Cadastrar</button>
        </form>
        
        <div id="sucesso" class="sucesso-final"></div>
    </div>
`);

var nome = document.getElementById('nome');
var email = document.getElementById('email');
var idade = document.getElementById('idade');
var senha = document.getElementById('senha');
var confirmaSenha = document.getElementById('confirmaSenha');
var btnCadastrar = document.getElementById('btnCadastrar');
var formCadastro = document.getElementById('formCadastro');
var sucesso = document.getElementById('sucesso');

function limparEstilo(campo) {
    campo.classList.remove('erro');
    campo.classList.remove('ok');
}

function validarNome() {
    var valor = nome.value.trim();
    var ok = valor.length >= 2;
    limparEstilo(nome);
    document.getElementById('erroNome').style.display = ok ? 'none' : 'block';
    document.getElementById('okNome').style.display = ok ? 'block' : 'none';
    if (ok) nome.classList.add('ok');
    else nome.classList.add('erro');
    return ok;
}

function validarEmail() {
    var valor = email.value.trim();
    var ok = valor.indexOf('@') > -1 && valor.indexOf('.') > -1;
    limparEstilo(email);
    document.getElementById('erroEmail').style.display = ok ? 'none' : 'block';
    document.getElementById('okEmail').style.display = ok ? 'block' : 'none';
    if (ok) email.classList.add('ok');
    else email.classList.add('erro');
    return ok;
}

function validarIdade() {
    var valor = parseInt(idade.value);
    var ok = !isNaN(valor) && valor >= 18;
    limparEstilo(idade);
    document.getElementById('erroIdade').style.display = ok ? 'none' : 'block';
    document.getElementById('okIdade').style.display = ok ? 'block' : 'none';
    if (ok) idade.classList.add('ok');
    else idade.classList.add('erro');
    return ok;
}

function validarSenha() {
    var valor = senha.value;
    var ok = valor.length >= 8;
    limparEstilo(senha);
    document.getElementById('erroSenha').style.display = ok ? 'none' : 'block';
    document.getElementById('okSenha').style.display = ok ? 'block' : 'none';
    if (ok) senha.classList.add('ok');
    else senha.classList.add('erro');
    return ok;
}

function validarConfirma() {
    var ok = confirmaSenha.value === senha.value && confirmaSenha.value !== '';
    limparEstilo(confirmaSenha);
    document.getElementById('erroConfirma').style.display = ok ? 'none' : 'block';
    document.getElementById('okConfirma').style.display = ok ? 'block' : 'none';
    if (ok) confirmaSenha.classList.add('ok');
    else confirmaSenha.classList.add('erro');
    return ok;
}

function validarTudo() {
    var nomeOk = validarNome();
    var emailOk = validarEmail();
    var idadeOk = validarIdade();
    var senhaOk = validarSenha();
    var confirmaOk = validarConfirma();
    btnCadastrar.disabled = !(nomeOk && emailOk && idadeOk && senhaOk && confirmaOk);
}

nome.oninput = validarTudo;
email.oninput = validarTudo;
idade.oninput = validarTudo;
senha.oninput = validarTudo;
confirmaSenha.oninput = validarTudo;

formCadastro.onsubmit = function(e) {
    e.preventDefault();
    if (!btnCadastrar.disabled) {
        sucesso.innerHTML = 'Cadastro realizado com sucesso! Bem-vindo(a), ' + nome.value.trim() + '!';
        sucesso.style.display = 'block';
        formCadastro.reset();
        validarTudo();
    }
};