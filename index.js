// Aquí vivirá la función mdLinks que llamará a las microfunciones de app.js

// Se importa la función 'mdLinks' desde el módulo './lib/funMdLinks.js'
const { mdLinks } = require("./lib/funMdLinks.js");

// Se ejecuta la función 'mdLinks' con el archivo "./README.md"
// Esta función devuelve una promesa que resuelve con los enlaces encontrados en el archivo
mdLinks("./README.md")
    .then((links) => {
        // Cuando la promesa se resuelve con éxito, se muestra la lista de enlaces
        console.log(links);
    })
    .catch(console.error);
