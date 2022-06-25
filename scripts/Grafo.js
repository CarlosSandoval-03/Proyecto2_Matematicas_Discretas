class Grafo {
	constructor(numVertices) {
		this.numVertices = numVertices;
		this.nodos = [];
		this.conexiones = {};
	}

	// Metodo para agregar un nodo al grafo
	agregarNodo(x, y, id = undefined) {
		let nodo = new Nodo(x, y, id);
		this.nodos.push(nodo);

		return nodo;
	}

	// Metodo para eliminar un nodo del grafo
	eliminarNodo(nodo) {
		let index = this.nodos.indexOf(nodo);
		this.nodos.splice(index, 1);

		Object.keys(this.conexiones).forEach((key) => {
			if (key.includes(nodo.id)) {
				delete this.conexiones[key];
			}
		});
	}

	// Metodo para agregar una arista entre dos nodos
	agregarArista(nodo1, nodo2) {
		let xInicial = nodo1.x,
			yInicial = nodo1.y;

		let xFinal = nodo2.x,
			yFinal = nodo2.y;

		this.conexiones[`${nodo1.id}-${nodo2.id}`] = new Arista({
			xInicial,
			yInicial,
			xFinal,
			yFinal,
		});
	}

	// Metodo para eliminar una arista entre dos nodos
	eliminarArista(nodo1, nodo2) {
		delete this.conexiones[`${nodo1.id}-${nodo2.id}`];
	}

	dibujar() {
		for (let arista in this.conexiones) {
			this.conexiones[arista].dibujar();
		}

		for (let i = 0; i < this.nodos.length; i++) {
			this.nodos[i].dibujar();
		}
	}
}
