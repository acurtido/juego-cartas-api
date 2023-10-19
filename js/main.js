import { crearMazo, robarCartas, mostrarCartas } from "./api.js";

(async () => {
    try {
        const mazoId = await crearMazo();
        console.log(`Nuevo mazo creado con el ID: ${mazoId}`);

        const cantidadDeCartas = 5;
        const cartas = await robarCartas(mazoId, cantidadDeCartas);

        console.log(`Se robaron ${cantidadDeCartas} cartas del mazo:`);
        console.log(cartas);

        mostrarCartas(cartas, "imagenesCartasDiv");
    } catch (error) {
        console.error("Ha ocurrido un error:", error);
    }
})();