// capturamos los elementos para interactuar con ellos.
const botones = document.querySelectorAll(".abrir,.cerrar");

// capturamos el elemento que moveremos.
const navegacion = document.querySelector(".hamb");

const bird = document.querySelector("#bird")

/* Alternativa 
for(var i = 0; i < botones.length; i++) {
	// decimos que los botones escuchen un evento.
	botones[i].addEventListener("click", function() { // escuchara al indice 0 - abrir
	navegacion.classList.toggle("desplegado");	// escribimos desplegado en la clase
});
}
*/

botones.forEach(boton => {
	boton.addEventListener("click", function(){
		navegacion.classList.toggle("desplegado");
		bird.classList.toggle("blur");
	})
})