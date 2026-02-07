let tiempo = 5;

/* Cuenta */

function empezarCuenta(){

document.getElementById("startBtn").style.display="none";

let cd=document.getElementById("countdown");
cd.classList.remove("hidden");
cd.innerText=tiempo;

let intervalo=setInterval(()=>{

tiempo--;
cd.innerText=tiempo;

if(tiempo===0){

clearInterval(intervalo);
cd.classList.add("hidden");
inicioReal();

}

},1000);
}

/* Inicio */

function inicioReal(){

document.getElementById("content").classList.remove("hidden");

let audio=document.getElementById("musica");
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

/* Cartas */

function mostrarCartas(){
document.getElementById("cartas").classList.remove("hidden");
}

/* Mensajes */

function abrir(n){

let textos={

1:`Feliz cumpleaños, mi niña bonita.
Quiero que sepas que eres una persona muy especial para mí, desde que llegaste, haces mis días más lindos con tu forma de ser, con tu sonrisa y con tu ternura.

Deseo que esta nueva etapa esté llena de salud, alegría y sueños cumplidos.

Nunca olvides lo valiosa que eres, estoy muy feliz de tenerte en mi vida.`,

2:`Feliz cumpleaños, hermosa 💕
Desearte todo lo lindo del mundo.

Eres una persona muy especial para mí, me importas mucho y siempre quiero lo mejor para ti.

Conocerte fue lo más lindo que me pudo pasar.`,

3:`Quiero que recuerdes siempre que no estás sola.

Siempre tendrás a alguien que se preocupe por ti, que te escuche y que quiera verte feliz.

Cuenta conmigo, hoy y siempre 💙`,

4:`Feliz día, niña bonita 💗🎉
Que Dios te bendiga siempre y te cuide.

Me gustaría poder abrazarte hoy y decirte lo importante que eres para mí.

Cuando nos veamos será más especial.

Feliz cumpleaños, mi niña hermosa 🫶👑`
};

let box=document.getElementById("mensaje");

box.innerText=textos[n];
box.classList.remove("hidden");

fuegos();
}

/* Corazones */

document.addEventListener("touchmove",crearCorazon);
document.addEventListener("mousemove",crearCorazon);

function crearCorazon(e){

let x=e.touches?e.touches[0].clientX:e.clientX;
let y=e.touches?e.touches[0].clientY:e.clientY;

let c=document.createElement("div");
c.className="corazon";
c.innerHTML="💖";

c.style.left=x+"px";
c.style.top=y+"px";

document.body.appendChild(c);

setTimeout(()=>{c.remove();},2000);
}

/* Frases */

let frases=[
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

f.innerText=frases[Math.floor(Math.random()*frases.length)];
f.style.left=Math.random()*80+"%";

document.getElementById("frases").appendChild(f);

setTimeout(()=>{f.remove();},6000);

},3000);

}
