function mostrarMensaje(){

let mensajes = [
"💖 Gracias por existir",
"🎂 Que todos tus sueños se cumplan",
"✨ Eres una persona increíble",
"🥰 Siempre estaré contigo",
"🌸 Nunca olvides lo especial que eres"
];

let contenedor = document.getElementById("cards");
contenedor.innerHTML = "";

mensajes.forEach(m => {
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = m;
  contenedor.appendChild(div);
});
}

function fuegos(){
confetti({
  particleCount: 200,
  spread: 90,
  origin: { y: 0.6 }
});
}
