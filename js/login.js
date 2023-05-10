//Criando objetos
const usuario1 = {
    usuarioEmail : "jaul@email.com",
    usuarioSenha : "12345",
    usuarioGenero : "m",
    gravarDados : true
}

const usuario2 = {
    usuarioEmail : "bkzin@gmail.com",
    usuarioSenha : "67890",
    usuarioGenero : "m",
    gravarDados : true
}

//Criando lista de objetos
let listaDeUsuarios = []
listaDeUsuarios.push(usuario1)
listaDeUsuarios.push(usuario2)

addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){
        const inputEmail = document.querySelector("#idEmail");
        const inputPass = document.querySelector("#idPass");

        try {
            listaDeUsuarios.forEach((usuario)=>{
                if(inputEmail.value == usuario.usuarioEmail && inputPass.value == usuario.usuarioSenha) {
                    throw("Validado");
                }
            });
            throw("Não validado");
        } catch (msg) {
            const msgStatus = document.querySelector("#msgStatus");
            if(msg == "Validado"){
                msgStatus.setAttribute("style", "color:#00f000;");
                msgStatus.innerHTML = "<span>Login efetuado com Sucesso!</strong></span>";
            } else{
                msgStatus.setAttribute("style", "color:#ff0000;");
                msgStatus.innerHTML = "<span>Senha ou usuário inválidos!</strong></span>";
            }
            
        }
    }
}); 