var temporizador = "";
var lienzo = document.getElementById("lienzo");
var contexto = lienzo.getContext("2d");
var nave = new Image();
nave.src = "img/arco.png";
var naveanchura = nave.width;
var navealtura = nave.height;
var cuentatiempo = 0;
//gestion estrellas 
var estrellas = new Image();
estrellas.src = "img/Stars-Nebulae/Stars.png";
var estrellas2 = new Image();
estrellas2.src = "img/Stars-Nebulae/Stars2.png";
var estrellasx = 0;
var estrellasy = new Array();
var estrellas2x = 0;
var estrellas2y = new Array();
var velocidadestrellas = new Array();
var numeroestrellas = 20;
for(var i = 0;i<numeroestrellas;i++){
	estrellasx[i] = Math.random()*1000-100;
	estrellasy[i] = Math.random()*800;
	velocidadestrellas[i] = Math.random()*0.3;
	
}
//nubes
var nebulosasx = new Array();
var nebulosasy = new Array();
var nebulosas = new Image();
nebulosas.src = "img/Stars-Nebulae/1.png"; 
var numeronebulosas = 20;
var velocidadnebulosas = new Array();
for(var i = 0; i < numeronebulosas;i++){
	nebulosasx[i] = Math.random()*20000;
	nebulosasy[i] = Math.random()*800-100;
	velocidadnebulosas[i] = Math.random()*0.5;
}
//nubes2
var nebulosas2x = new Array();
var nebulosas2y = new Array();
var nebulosas2 = new Image();
nebulosas2.src = "img/Stars-Nebulae/2.png"; 
var numeronebulosas2 = 20;
var velocidadnebulosas2 = new Array();
for(var i = 0; i < numeronebulosas2;i++){
	nebulosas2x[i] = Math.random()*20000;
	nebulosas2y[i] = Math.random()*800-100;
	velocidadnebulosas2[i] = Math.random()*0.5;
}
//personaje
var navex = 100;
var navey = 100;
var movimientopersonajex = 0;
var movimientopersonajey = 0;
var navevelocidad = 5;
var velocidadx = 0;
var velocidady = 0;
//anchura y altura de la ventana
var anchuraventana = window.innerWidth;
var alturaventana = window.innerHeight;
var cuentabalas = 0;
var balax = new Array();
var balay = new Array();
var velocidadbala = 5;
//enemigo
var enemigox = new Array();
var enemigoy = new Array();
var imgenemigo = new Image();
imgenemigo.src = "img/Example_ships/0.png"; 
var enemigo = new Array();

enemigo[0] = new Image();
enemigo[0].src = "img/Example_ships/0.png"; 
enemigo[1] = new Image();
enemigo[1].src = "img/Example_ships/1.png";
enemigo[2] = new Image();
enemigo[2].src = "img/Example_ships/2.png";
enemigo[3] = new Image();
enemigo[3].src = "img/Example_ships/3.png";
var enemigoanchura = imgenemigo.width;
var enemigoaltura = imgenemigo.height;
var numeroenemigos = 40;
var tipoenemigo = new Array();
for(var i = 0; i < numeroenemigos;i++){

	enemigox[i] = Math.random()*10000;
	enemigoy[i] = Math.random()*600;
	tipoenemigo[i] = Math.floor(Math.random()*enemigo.length);
	//console.log("numeroenemigo "+tipoenemigo)
	
}

//disparo
var imgdisparo = new Image();
imgdisparo.src = "img/Muzzle_flashes/flash.png"
var ratonpulsado = false;
var tempx = 0;
var tempy = 0;
var puntuacion = 0;
var vidas = 10;