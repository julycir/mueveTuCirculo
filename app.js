window.onload = function() {

	const flechaArriba = document.querySelector('.up')
	const flechaIzquierda = document.querySelector('.left')
	const flechaDerecha = document.querySelector('.right')
	const flechaAbajo = document.querySelector('.down')

	const botonRandom = document.querySelector('.random')

	const colorRojo = document.querySelector('.red')
	const colorAzul = document.querySelector('.blue')
	const colorVerde = document.querySelector('.green')

	const circle = document.querySelector('.circle')

	function moverArriba() {
		circle.style.transform = "translateY(-300px)";
	}
	flechaArriba.addEventListener('click', moverArriba)

	function moverIzquierda() {
		circle.style.transform = "translateX(-300px)";
	}
	flechaIzquierda.addEventListener('click', moverIzquierda)

	function moverDerecha() {
		circle.style.transform = "translateX(300px)";
	}
	flechaDerecha.addEventListener('click', moverDerecha)

	function moverAbajo() {
		circle.style.transform = "translateY(300px)";
	}
	flechaAbajo.addEventListener('click', moverAbajo)

	document.addEventListener("keydown", event => {
	    if (event.keyCode == '38') {
	        moverArriba()
	    }
	    else if (event.keyCode == '40') {
	        moverAbajo()
	    }
	    else if (event.keyCode == '37') {
	       	moverIzquierda()
	    }
	    else if (event.keyCode == '39') {
	        moverDerecha()
	    }
	})

	document.addEventListener('keydown', teclaArriba)

	function pintarAzul() {
		circle.style.borderColor ='blue'
		circle.style.backgroundColor = 'blue'
	}

    colorAzul.addEventListener('click', pintarAzul)

	function pintarVerde() {
		circle.style.borderColor ='green'
		circle.style.backgroundColor = 'green'
	}

	colorVerde.addEventListener('click', pintarVerde)

	function pintarRojo() {
		circle.style.borderColor ='red'
		circle.style.backgroundColor = 'red'
	}

	colorRojo.addEventListener('click', pintarRojo)

}