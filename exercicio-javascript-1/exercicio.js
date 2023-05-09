//1 – Crie um botão que, quando clicado, muda a cor do background do body da página exercicio-1.html.
const black = document.getElementById("black");
const white = document.getElementById("white");

black.addEventListener("click", function() {
  document.body.setAttribute("style",`background-color: #000101;color:#fff`);
});

white.addEventListener("click", function() {
  document.body.setAttribute("style",`background-color: #fff;color:#000101`);
});

//2 – Crie um formulário com um campo de entrada de texto e um botão "Enviar". Quando o botão for clicado, o valor do campo de entrada deve ser adicionado como um novo item em uma lista na página
const sender = document.getElementById("sender");
const list = document.getElementById("list");
const entry = document.querySelector("input");

sender.addEventListener("click", function(){
  const newItem = document.createElement("li");
  newItem.innerHTML = entry.value
  list.appendChild(newItem);
});

//3 – Crie uma imagem com um botão que, quando clicado, troca a imagem por outra.
const swap = document.getElementById("swap");
const photo = document.querySelector("img");

swap.addEventListener("click", function(){
  if (photo.getAttribute("src") === "../img/lobo1.jpg"){
    photo.setAttribute("src", "../img/lobo2.jpg");
  } else{
    photo.setAttribute("src", "../img/lobo1.jpg");
  };
});

//4 – Crie um botão e um elemento qualquer html, quando o botão é clicado, exibe uma mensagem neste elemento html na página.
const map = document.getElementById("map");
const treasure = document.getElementById("treasure");

map.addEventListener("click", function(){
  treasure.innerHTML = "Achou!";
});

//5 – Crie um botão que, quando clicado, oculta um elemento HTML.
const occult = document.getElementById("occult");
const msg = document.getElementById("msg");

occult.addEventListener("click", function(){
  msg.innerHTML = "";
});

