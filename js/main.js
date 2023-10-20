import { crearMazo, robarCartas, mostrarCartas } from "./api.js";

(async () => { // Función asíncrona autoejecutable
    try {
        const mazoId = await crearMazo();
        console.log("El mazo fue creado con el ID: ", mazoId);

        const cartas = await robarCartas(mazoId, 5);
        console.log("Las cartas robadas son: ", cartas);

        mostrarCartas(cartas, "imagenesCartasDiv")
    } catch (error) {
        console.error(error);
    }

})();