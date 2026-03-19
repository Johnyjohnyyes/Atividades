console.log("login sistema")

var usuario = "Admin"
var pass = "1234"
var tentativas = 3

while(true){
    var nome = prompt("seu usuario")
    
    if(nome==usuario){
        while(tentativas>0){
            var senha = prompt("sua senha")
            
            if(senha==pass){
                console.log("bem vindo",usuario)
                tentativas = 0
                break
            }
            else{
                tentativas--
                console.log("senha errada. faltam",tentativas)
                if(tentativas==0){
                    console.log("acesso bloqueado")
                }
            }
        }
        break
    }
    else{
        console.log("usuario errado")
    }
}