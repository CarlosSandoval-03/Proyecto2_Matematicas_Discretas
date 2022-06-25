class Arista {
	// Propiedades graficas - Aristas (No seleccionado)
	static COLOR_ARISTA = "#000000";
	static PESO_ARISTA = 0.5;

	// Propiedades graficas - Aristas (Seleccionado)
	static COLOR_ARISTA_SELECCIONADO = "#FF0000";

	constructor({ xInicial, yInicial, xFinal, yFinal }) {
		this.posInicial = createVector(xInicial, yInicial);
		this.posFinal = createVector(xFinal, yFinal);
	}

	dibujar(esSeleccionado = false) {
		push(); // Entramos a una nueva instancia de dibujo

		// Dibujamos la arista
		stroke(Arista.COLOR_ARISTA);
		if (esSeleccionado) stroke(Arista.COLOR_ARISTA_SELECCIONADO);

		strokeWeight(Arista.PESO_ARISTA);
		line(
			this.posInicial.x,
			this.posInicial.y,
			this.posFinal.x,
			this.posFinal.y
		);
		rotate(this.posFinal.heading());

		pop(); // Salimos de la instancia de dibujo
	}
}
