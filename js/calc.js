

//CRIANDO UMA FUNÇÃO PARA RECEBER O BOTÃO
function insereNumero(botao,visor) {
    visor.value += botao.value;
}

// function resultado(visor) {

//     let novoVisor = visor.value.split("+");

//     let resultadoOperacao = 0;

//     novoVisor.forEach((nr)=> {
//         resultadoOperacao += parseInt(nr);
//     });
//     console.log(resultadoOperacao);

// }

function resultado(visor) {

    let soma = visor.value.split("+");
    console.log(soma);
    let subtracao = visor.value.split("-");
    console.log(subtracao);

}