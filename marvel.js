/*
function cambioPrimeroIzquierdo(){
    controlIzquierdo.disabled=true;
}

function cambioSegundoIzquierdo(){
    imagenMarvel1.src="avengers.jpg";
    controlIzquierdo.addEventListener("click", cambioPrimeroIzquierdo);
    controlDerecho.addEventListener("click", cambioPrimeroDerecho);
    return;
}

function cambioTercerIzquierdo(){
    imagenMarvel1.src="ultron.jpg";
    controlIzquierdo.addEventListener("click", cambioSegundoIzquierdo);
    controlDerecho.addEventListener("click", cambioSegundoDerecho);
    return;
}

function cambioCuartoIzquierdo(){
    imagenMarvel1.src="infinitywar.jpeg";
    controlIzquierdo.addEventListener("click", cambioTercerIzquierdo);
    controlDerecho.addEventListener("click", cambioTercerDerecho);
    return;
}

//------------------------------------------------------------------------------------------------------------------------------

function cambioPrimeroDerecho(){
    imagenMarvel1.src="ultron.jpg";
    controlDerecho.addEventListener("click", cambioSegundoDerecho);
    controlIzquierdo.addEventListener("click", cambioSegundoIzquierdo);
    return;
}

function cambioSegundoDerecho(){
    imagenMarvel1.src="infinitywar.jpeg";
    controlDerecho.addEventListener("click", cambioTercerDerecho);
    controlIzquierdo.addEventListener("click", cambioTercerIzquierdo);
    return;
}

function cambioTercerDerecho(){
    imagenMarvel1.src="endgame.jpg";
    controlDerecho.disabled=true;
    controlIzquierdo.addEventListener("click", cambioCuartoIzquierdo);
    return;
}


function programa(){
    controlDerecho.addEventListener("click", cambioPrimeroDerecho);
    controlIzquierdo.addEventListener("click", cambioPrimeroIzquierdo);
}


window.addEventListener("load", programa);*/



//------------------------------------------------------------------------------------------------------------------------------
/*var radio = [];
    radio[0] = "radio1";
    radio[1] = "radio2";
    radio[2] = "radio3";
    radio[3] = "radio3";

       var cambioCajaRadio = parseInt(0);
        var cambioTotalRadio = cambioCajaRadio && tipoImagenes;



//------------------------------------------------------------------------------------------------------------------------------

var tipoImagenes = parseInt(0);
var imagenes = [];

    imagenes[0] = "avengers.jpg";
    imagenes[1] = "ultron.jpg";
    imagenes[2] = "infinitywar.jpeg";
    imagenes[3] = "endgame.jpg";
    imagenes[4] = "xmen.jpg";
    imagenes[5] = "guardianes.jpg";
    imagenes[6] = "stanlee.jpg";



        function slider(){

            imagenMarvel.src= imagenes[tipoImagenes];
            imagenMarvel.style.width="100%";
            imagenMarvel.style.height="100%";
            imagenMarvel.style.opacity="0.8";

                if(tipoImagenes < 6){

                    //cambioTotalRadio++;
                    tipoImagenes++;

                   }else{

                       //cambioTotalRadio = 0;
                       tipoImagenes = 0;

                   }

        }

        setInterval(slider, 4000);



function cambioIzquierdo(){

         imagenMarvel.src= imagenes[tipoImagenes];

            if(tipoImagenes >= 1){

                    tipoImagenes--;
                botonIzquierdo.disabled = false;

                }
}


function cambioDerecho(){

        imagenMarvel.src= imagenes[tipoImagenes];

            if(tipoImagenes < 6){

                tipoImagenes++;
                botonDerecho.disabled = false;

              }else if(tipoImagenes == 6){

                    botonDerecho.disable = true;
                    botonDerecho.opacity="0.5";
                }
}



function cambio(){

        botonIzquierdo.addEventListener("click", cambioIzquierdo);
        botonDerecho.addEventListener("click", cambioDerecho);
}




window.addEventListener("load", slider);
window.addEventListener("load", cambio);
//window.addEventListener("load", radioImagenes);
*/


//------------------------------------------------------------------------------------------------------------------------------


var principal = 0
var tiempo = 4000;
var slide = setInterval("adelante()", tiempo);

function presion(n) {
    var presionRadios = getElementsByClassName("circulos");
      for (i = 0; i < presionRadios.length; i++) {
          if (presionRadios[i].className.includes("primero")) {
            presionRadios[i] = presionRadios[i].className.replace("primero", "circulos");
            break;
          }
      }
}

function radio(n){
    var imagenes = document.getElementsByClassName("imagenMarvel");
      for(i = 0; i< imagenes.length; i++){
              if (imagenes[i].className.includes("principalMarvel")){
                imagenes[i].className = imagenes[i].className.replace("principal", "imagenMarvel");
                break;
              }
        }
      imagenes[n].className += " principalMarvel";
}



function adelante(){
    principal++;
    if (principal > 6) {
        principal = 0;
    }

    radio(principal);
    check(principal);
}


function atras(){
  principal--;
  if (principal < 0) {
      principal = 6;
  }

  radio(principal);
  check(principal);
}

function check(principal){
    if (principal == 0) {
        radio1.checked = true;
    }
    else if (principal == 1) {
      radio2.checked = true;
    }
    else if (principal == 2) {
      radio3.checked = true;
    }
    else if (principal == 3) {
      radio4.checked = true;
    }
    else if (principal == 4) {
      radio5.checked = true;
    }
    else if (principal == 5) {
      radio6.checked = true;
    }
    else if (principal == 6) {
      radio7.checked = true;
    }
}
