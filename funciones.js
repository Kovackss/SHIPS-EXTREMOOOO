function dibujafondo(){

	estrellasx -= 0.1
	contexto.drawImage(estrellas,estrellasx,0)
	estrellas2x -= 0.1
	estrellas2x -=Math.random()*2-1
	contexto.drawImage(estrellas2,estrellas2x,0)
}
function dibujaestrellas(){
	for(var i = 0;i<numeroestrellas;i++){							// para cada estrella
	estrellasx[i] -= velocidadestrellas[i];							// posicion de x disminuye en una velocidad aleatoria
	contexto.drawImage(estrellas,estrellasx[i],estrellasy[i]);		// se dibuja la estrella en posiciones x e y diferentes
	}
}
function dibujarnebulosas(){
	for(var i = 0;i<numeronebulosas;i++){							//para cada nebulosa
	nebulosasx[i] -= velocidadnebulosas[i];							//posicion de X de la nebulosa disminuye en velocidad aleatoria
	contexto.drawImage(nebulosas,nebulosasx[i],nebulosasy[i]);		//se dibuja la nebulosa en X e Y posiciones diferentes
	}
}
function dibujarnebulosas2(){
	for(var i = 0;i<numeronebulosas2;i++){							//para cada nebulosa
	nebulosas2x[i] -= velocidadnebulosas2[i];						//posicion de X de la nebulosa disminuye en velocidad aleatoria
	contexto.drawImage(nebulosas2,nebulosas2x[i],nebulosas2y[i]);	//se dibuja la nebulosa en X e Y posiciones diferentes
	}
}
function gestionenemigo(){
	for(var i = 0; i < numeroenemigos;i++){	
		
		enemigox[i]--;												//se desplaza en X en negativo a velocidad constante
		enemigoy[i]+= Math.random()*4-2;							//se desplaza Y aleatoriamente dentro de un rango
		contexto.drawImage(enemigo[tipoenemigo[i]],enemigox[i],enemigoy[i]);		//se dibujo al enemigo en posiciones Y y X aleatoriamente
		//contexto.drawImage(enemigo,enemigox[i],enemigoy[i]);
	}
}
function balas(){
	// repasamos las balas
		contexto.fillStyle = "red";
		for(var i = 0;i < cuentabalas ;i++){							//para cada bala
			balax[i]+= velocidadbala;								//posicion de X aumenta segun la velocidad de la bala
			contexto.drawImage(imgdisparo,balax[i],balay[i])		//se dibuja la bala en X y Y diferente
			
		}
		// compruebo si alguna de las balas llega al HITBOX
		for(var i=0;i < cuentabalas ;i++){							//para cada bala
			for(var j = 0;j <numeroenemigos;j++){					// para cada enemigo
					
					if(Math.abs(balax[i] - enemigox[j]) < enemigoanchura && Math.abs(balay[i] - enemigoy[j]) < enemigoaltura-90){
						//console.log("colisiona")
						enemigox.splice(j,1)								//desaparece enemigo en x
						enemigoy.splice(j,1)								//desaparece enemigo en y
						balax.splice(i,1)									//desaparece la bala con que impacto
						balay.splice(i,1)									//desaparece la bala con que impacto
						numeroenemigos--;									//la cantidad de enemigos va disminuyendo
						$("#contieneaudio").append('<audio id="musica" src ="audio/boom1.mp3" autoplay controls="true"></audio>') //cuando colisiona con el enemigo se ejecuta el audio
						puntuacion++;
						
				
			}
		}
	}
}	
function dispara(){		
	balax[cuentabalas] = navex;										//la bala aparece en X + anchura de la nave
	balay[cuentabalas] = navey+(navealtura/2);						//la bala aparece en Y + altura/2 de la nave
	cuentabalas++;													//el contador de balas aumenta

	}

function personaje(){
		if(movimientopersonajey == "abajo"){velocidady++;navey+= velocidady;}
		if(movimientopersonajey == "arriba"){velocidady--;navey+= velocidady;}
		if(movimientopersonajex == "derecha"){velocidadx++;navex+= velocidadx;}
		if(movimientopersonajex == "izquierda"){velocidadx--;navex+= velocidadx;}
		contexto.drawImage(nave,navex,navey);
}
function gestionteclas(){
	$(document).keydown(function(event){
	if(event.which == 40){movimientopersonajey = "abajo";} 			// se mueve abajo
	if(event.which == 39){movimientopersonajex = "derecha";} 		// se mueve a la derecha
	if(event.which == 38){movimientopersonajey = "arriba";} 		// se mueve arriba
	if(event.which == 37){movimientopersonajex = "izquierda";} 		// se mueve a la izquierda
	if(event.which == 32){											// se dispara con espacio
		dispara();
	}
})
$(document).keyup(function(event){
	if(event.which == 40){movimientopersonajey = 0}					// suelto abajo y deja de moverse
	if(event.which == 39){movimientopersonajex = 0}					// suelto derecha y deja de moverse
	if(event.which == 38){movimientopersonajey = 0}					// suelto arriba y deja de moverse
	if(event.which == 37){movimientopersonajex = 0} 				// suelto izquierda y deja de moverse
	
})
}

function gestionsensible(){
	
	$("#arriba").mousedown(function(){movimientopersonajey = "arriba"})
	$("#abajo").mousedown(function(){movimientopersonajey = "abajo"})
	$("#derecha").mousedown(function(){movimientopersonajex = "derecha"})
	$("#izquierda").mousedown(function(){movimientopersonajex = "izquierda"})
	$("#disparo").click(function(){dispara();})
	 // Al soltar
	/*$("#arriba").mouseup(function(){movimientopersonajey = 0})
	$("#abajo").mouseup(function(){movimientopersonajey = 0})
	$("#derecha").mouseup(function(){movimientopersonajex = 0})
	$("#izquierda").mouseup(function(){movimientopersonajex = 0})
	*/
	$(document).mouseup(function(){
		movimientopersonajex = 0;
		movimientopersonajey = 0;
})

}
function muevemouse(){
$("#lienzo").mousemove(function(event){
	//navex = event.clientX;
	//navey = event.clientY;
	if(ratonpulsado == true){
		navex =  event.clientX - tempx;
		navey =  event.clientY - tempy;
	}
$("#lienzo").mousedown(function(){
		ratonpulsado = true;
		tempx = event.clientX - navex;
		tempy = event.clientY - navey;
	})
})

$("#lienzo").mouseup(function (){ratonpulsado = false;})
}
function movpersonaje(){
	if(movimientopersonajex == 0){
		if(velocidadx > 0){velocidadx--;}
		if(velocidadx < 0){velocidadx++;}
		navex += velocidadx;
		}
	if(movimientopersonajey == 0){
		if(velocidady > 0){velocidady--;}
		if(velocidady < 0){velocidady++;}
		navey += velocidady;
		}
}
function eliminabalas(){
	//for(var i = 0; i < cuentabalas ; i++){
	for(var numnave in balax){
		if(balax[numnave]>anchuraventana){								//si la bala en x es mayor a la anchura de la ventana
		cuentabalas--;													//las balas disminuyen
		balax.splice(numnave,1);										//bala desaparece en x
		balay.splice(numnave,1);										//bala desaparece en y
		}
	}
}
function mantenmeadentro(){
	if(navex > anchuraventana){navex = anchuraventana}
	if(navex < 0){navex = 0}
	if(navey > 800){navey = 800}
	if(navey < 0){navey = 0}
}
function gestioonamusica(){
	var musica = document.getElementById("musica")						//llamo al elemento musica
	musica.volume = 0.05;												//volumen de musica en 0.5
	musica.play();														//la musica comienza en play

}
function eliminaaudio(){
	$("#contieneaudio").html("");
}
function ganaste(){
	
	if(puntuacion == 10){												//si la puntuacion es igual a 10
		
		$('#ganaste').html("HAS GANADO");								//aparece has ganado
		setTimeout("location.reload()",4000);							//luego de 4 segundos se recarga la pagina
	}
}
function perdiste(){
	
	if(vidas == 0){														//si la vida llega a 0
	$('#perdiste').html("HAS PERDIDO");									//aparece has perdido
	setTimeout("location.reload()",4000);								//luego de 4 segundos recarga la pagina
	}
}
function pierdesvidas(){
	for(var numglobo in enemigox){
		if(enemigox[numglobo]<0){										//si enemigo de x es menor a 0
		vidas--;														//disminuye vida
		enemigox.splice(numglobo,1);									//desaparece el enemigo en x
		enemigox.splice(numglobo,1);									// desaparece el enemigo en y
		}
	}
}