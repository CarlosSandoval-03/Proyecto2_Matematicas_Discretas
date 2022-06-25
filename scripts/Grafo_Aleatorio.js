class Grafo_Aleatorio extends Grafo {
	static PROBABILIDAD_ARISTA = 0.5;

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

	generarAristas(plano = true) {
		let nodo1 = random(this.nodos);
		let nodo2 = random(this.nodos);

		if (nodo1 === nodo2) {
			return;
		}

		if (plano) {
			let colision = false;
			for (let conexion in this.conexiones) {
				colision = collideLineLine(
					nodo1.x,
					nodo1.y,
					nodo2.x,
					nodo2.y,
					this.conexiones[conexion].posInicial.x,
					this.conexiones[conexion].posInicial.y,
					this.conexiones[conexion].posFinal.x,
					this.conexiones[conexion].posFinal.y
				);
				if (colision) {
					return this.generarAristas();
				}
			}
		}
		return this.agregarArista(nodo1, nodo2);
	}

	generar(plano = true) {
		for (let i = 0; i < this.numVertices; i++) {
			this.generarNodo();
		}
		for (let i = 0; i < this.numVertices; i++) {
			for (let j = i + 1; j < this.numVertices; j++) {
				if (random() < Grafo_Aleatorio.PROBABILIDAD_ARISTA) {
					this.generarAristas(plano);
				}
			}
		}

		this.crearMatrizAdyacencia();
	}

	dibujar() {
		super.dibujar();
	}
}
