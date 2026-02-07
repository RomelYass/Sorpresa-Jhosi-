let tiempo = 5;

/* Cuenta regresiva */

function empezarCuenta(){

document.getElementById("startBtn").style.display="none";

let cd = document.getElementById("countdown");
cd.classList.remove("hidden");
cd.innerText = tiempo;

let intervalo = setInterval(()=>{

tiempo--;
cd.innerText = tiempo;

if(tiempo === 0){

clearInterval(intervalo);
cd.classList.add("hidden");

inicioReal();

}

},1000);
}

/* Inicio */

function inicioReal(){

document.getElementById("content").classList.remove("hidden");

let audio = document.getElementById("musica");
audio.play();

fuegos();
globos();
frasesFlotantes();
}

/* Fuegos */

function fuegos(){
confetti({
particleCount:250,
spread:120,
origin:{y:0.6}
});
}

/* Globos */

function globos(){

let colores=["red","pink","yellow","purple","blue"];

for(let i=0;i<30;i++){

let b=document.createElement("div");
b.className="balon";

b.style.background=colores[Math.floor(Math.random()*5)];
b.style.left=Math.random()*100+"%";
b.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(b);
}
}

/* Mostrar cartas */

function mostrarCartas(){
document.getElementById("cartas").classList.remove("hidden");
}

/* Abrir cartas */

function abrir(n){

let textos={

1:`Feliz cumpleaños, mi niña bonita.
Eres una persona muy especial para mí.
Haces mis días más lindos con tu sonrisa.

Nunca olvides lo valiosa que eres.`,

2:`Feliz cumpleaños, hermosa 💕
Me importas mucho y quiero lo mejor para ti.
Conocerte fue lo más lindo que me pasó.`,

3:`Recuerda que no estás sola.
Siempre puedes contar conmigo,
hoy y siempre 💙`,

4:`Feliz día, niña bonita 💗🎉
Que Dios te bendiga siempre.
Me gustaría abrazarte hoy.

Feliz cumpleaños, mi reina 🫶👑`
};

let box=document.getElementById("mensaje");

box.innerText = textos[n];
box.classList.remove("hidden");

fuegos();
}

/* Modo noche */

function modoNoche(){
document.body.classList.toggle("noche");
}

/* Corazones */

document.addEventListener("touchmove", crearCorazon);
document.addEventListener("mousemove", crearCorazon);

function crearCorazon(e){

let x = e.touches ? e.touches[0].clientX : e.clientX;
let y = e.touches ? e.touches[0].clientY : e.clientY;

let corazon = document.createElement("div");
corazon.className="corazon";
corazon.innerHTML="💖";

corazon.style.left = x+"px";
corazon.style.top = y+"px";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},2000);
}

/* Frases flotantes */

let frases = [
"Me gusta pasar tiempo contigo 💙",
"Tu sonrisa me encanta ✨",
"Eres especial para mí 💖",
"Contigo todo es bonito 🌸",
"Me importas mucho 😌",
"Gracias por existir 💕",
"Me haces sonreír sin querer 🥹",
"Eres mi persona favorita 💫"
];

function frasesFlotantes(){

setInterval(()=>{

let f=document.createElement("div");
f.className="frase";

f.innerText = frases[Math.floor(Math.random()*frases.length)];
f.style.left = Math.random()*80+"%";

document.getElementById("frases").appendChild(f);

setTimeout(()=>{
f.remove();
},6000);

},3000);

  }
