const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

// Función para crear un nuevo mazo de cartas
export async function crearMazo() {
    const response = await fetch(`${API_BASE_URL}new/shuffle/`);
    const data = await response.json();
    return data.deck_id;
}

// Función para robar cartas del mazo
export async function robarCartas(mazoId, numberOfCards) {
    const response = await fetch(`${API_BASE_URL}${mazoId}/draw/?count=${numberOfCards}`);
    const data = await response.json();
    return data.cards;
}

// Función para mostrar las imágenes de las cartas
export function mostrarCartas(cartas, nombreDiv) {
    const dImagenesCartas = document.getElementById(nombreDiv);
    dImagenesCartas.innerHTML = "";

    cartas.forEach(carta => {
        const imagenCarta = document.createElement("img");
        imagenCarta.src = carta.image;
        imagenCarta.alt = `${carta.value} of ${carta.suit}`;
        dImagenesCartas.appendChild(imagenCarta);
    });
}

