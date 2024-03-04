// Variables para los detalles de las guitarras
const fender = {
    modelo: "American Professional II",
    color: "Sunburst",
    precio: 1499
};

const gibson = {
    modelo: "Les Paul Standard '50s",
    color: "Heritage Cherry Sunburst",
    precio: 2499
};

const prs = {
    modelo: "SE Custom 24",
    color: "Whale Blue",
    precio: 899
};

// Creando un array para almacenar las guitarras
const guitars = [fender, gibson, prs];

// Función de orden superior para calcular el precio con IVA
const calcularPrecioConIVA = (precioSinIVA) => {
    const iva = 0.21;
    return precioSinIVA * (1 + iva);
};

// Filtrar las guitarras por precio (mayor o igual a 1000)
const guitarrasCaras = guitars.filter(guitar => guitar.precio >= 1000);

// Encontrar la Gibson en el array
const gibsonEncontrada = guitars.find(guitar => guitar.modelo.toLowerCase() === "gibson");

// Mostrar los detalles de las guitarras filtradas. Para Salida elegí Console.log
console.log("Guitarras caras:");
guitarrasCaras.forEach(guitar => {
    console.log(`Modelo: ${guitar.modelo}`);
    console.log(`Color: ${guitar.color}`);
    console.log(`Precio (sin IVA): $${guitar.precio}`);
    console.log("-".repeat(20));
});

if (gibsonEncontrada) {
    console.log("Gibson encontrada:");
    console.log(`Modelo: ${gibsonEncontrada.modelo}`);
    console.log(`Color: ${gibsonEncontrada.color}`);
    console.log(`Precio (sin IVA): $${gibsonEncontrada.precio}`);
}




