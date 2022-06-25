class Grafo_Aleatorio extends Grafo {
	constructor(numVertices, ancho, alto) {
		super(numVertices);
		this.ancho = ancho - Nodo.TAMANO_NODO;
		this.alto = alto - Nodo.TAMANO_NODO;
	}

	generarNodo() {
		let x = random(this.ancho),
			y = random(this.alto);

		let colision = true;

		for (let i = 0; i < this.nodos.length; i++) {
			colision = collideCircleCircle(
				x,
				y,
				Nodo.TAMANO_NODO,
				this.nodos[i].x,
				this.nodos[i].y,
				Nodo.TAMANO_NODO
			);
			if (colision) {
				return this.generarNodo();
			}
		}

		return this.agregarNodo(x, y);
	}

	generar() {
		for (let i = 0; i < this.numVertices; i++) {
			this.generarNodo();
		}
	}

	dibujar() {
		super.dibujar();
	}
}
