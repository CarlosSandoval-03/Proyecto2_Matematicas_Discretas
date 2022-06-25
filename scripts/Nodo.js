class Nodo {
	// Enumeracion de los nodos
	static ID_NODO = 0;

	// Propiedades graficas - Nodos (No seleccionado)
	static TAMANO_NODO = 20;
	static COLOR_NODO = "#FFFFFF";
	static COLOR_TEXTO_NODO = "#000000";
	static PROPORCION_TEXTO_NODO = 2.5;

	// Propiedades graficas - Nodos (Seleccionado)
	static COLOR_NODO_SELECCIONADO = "#6600A1";
	static COLOR_NODOS_CONECTADOS_SELECCIONADO = "#D16AFF";

	// Propiedades graficas - Aristas (No seleccionado)
	static COLOR_ARISTA = "#000000";

	// Propiedades graficas - Aristas (Seleccionado)
	static COLOR_ARISTA_SELECCIONADO = "#FF0000";

	constructor(x = 0, y = 0, idManual = undefined) {
		this.id = idManual ?? Nodo.ID_NODO++;
		this.x = x;
		this.y = y;
		this.seleccionado = false;
	}

	dibujar(esSeleccionado = false) {
		ellipseMode(CENTER);
		// Dibujamos el nodo
		fill(Nodo.COLOR_NODO);

		// Si esta seleccionado el color cambiara
		if (esSeleccionado || this.seleccionado) fill(Nodo.COLOR_NODO_SELECCIONADO);

		ellipse(this.x, this.y, Nodo.TAMANO_NODO, Nodo.TAMANO_NODO);

		// Dibujamos el identificador del nodo
		textAlign(CENTER, CENTER);
		textSize(Nodo.TAMANO_NODO / Nodo.PROPORCION_TEXTO_NODO);
		fill(Nodo.COLOR_TEXTO_NODO);
		text(this.id, this.x, this.y);
	}
}
