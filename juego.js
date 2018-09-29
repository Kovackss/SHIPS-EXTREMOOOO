$(document).ready(function(){				
			inicio();
		});	
	function inicio(){
	$("#lienzo").attr("width",anchuraventana);
	$("#lienzo").attr("height",alturaventana);
	temporizador = setTimeout("bucle()",1000);	
	gestionteclas();
	//gestionsensible();
	muevemouse();
	gestioonamusica();
	
	}
	function bucle(){
		contexto.clearRect(0,0,anchuraventana,alturaventana);
	$("#puntuacion").html("Puntuacion:"+puntuacion);
	$("#vidas").html("Vidas:"+vidas);
		dibujafondo();
		dibujarnebulosas();
		dibujarnebulosas2();
		ganaste();
		perdiste();
		pierdesvidas();
		//dibujaestrellas();
		
		personaje();
		gestionenemigo();
		balas();
		if(cuentatiempo % 50 == 0){dispara();}
		if(cuentatiempo % 100 == 0){eliminaaudio();}
		movpersonaje();
		eliminabalas();
		mantenmeadentro();

			cuentatiempo++;
			clearTimeout(temporizador);
			temporizador = setTimeout("bucle()",30)
		}
