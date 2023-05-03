//DIFERENÇA ENTRE LET/VAR/CONST
// var nome = "Kayque";
// if(nome == "Kayque"){
//     let nome = "Denise";
// }
// console.log(nome);

 //Recuperando um elemento button que está no index.html
 const btn  = document.getElementById("meu-btn");
 
 //Atrelando um evento de click ao button que foi recuperado.
 btn.addEventListener("click" , function(){

    //Função Matemática - Math
    //randon = gera números aleatórios enre 0 e 1. Ex: 0.232323;
    //floor  = arredonda o número para baixo.
    //ceil   = arredonda o número para cima.
    //round  = arredonda o número aleatóriamente.
    let r,g,b;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    //Adicionando um atributo ao elemeno button
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

 } );

 //DESAFIO
//Recupere o elemento tit-sec e atrele a ele um evento de mouse a sua escolha.
// Altere a cor de fundo e a cor do texto quando o evento ocorer.
