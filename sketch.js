let grafoAleatorio;

function setup() {
	createCanvas(windowWidth, windowHeight);
	grafoAleatorio = new Grafo_Aleatorio(200, windowWidth, windowHeight);
	grafoAleatorio.generar(true);
}

function draw() {
	background(220);
	grafoAleatorio.dibujar();
}
