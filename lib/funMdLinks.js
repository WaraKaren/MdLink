// Se importan los módulos necesarios para trabajar con rutas de archivos y sistema de archivos
const path = require("path"); // Permite manipular rutas de archivos
const fs = require("fs"); // Proporciona funciones para trabajar con el sistema de archivos
const { isMdwnExtension } = require("./markdown.js"); // Importa una función para verificar la extensión .md
const fReadFile = require("./funReadFile.js"); // Importa una función para leer archivos

// Se define la función mdLinks que extrae los enlaces de un archivo Markdown
const mdLinks = (filePath) => {
    return new Promise((resolve, reject) => {
        try {
            // Comprueba si la ruta proporcionada es absoluta
            const isAbsolute = path.resolve(filePath);
            // Verifica si la ruta existe en el sistema de archivos
            const pathExist = fs.existsSync(isAbsolute);
            
            if (pathExist) { // Si la ruta existe
                if (isMdwnExtension(isAbsolute)) { // Si el archivo tiene extensión .md
                    // Lee el contenido del archivo
                    const contenido = fReadFile(isAbsolute)
                        .then((result) => {
                            console.log("" + result); // Muestra el resultado obtenido (contenido del archivo)
                            resolve(result); // Resuelve la promesa con el resultado (contenido del archivo)
                        })
                        .catch((error) => {
                            console.log(error); // Muestra cualquier error ocurrido durante la lectura
                            reject(error); // Rechaza la promesa con el error
                        });
                } else {
                    reject(new Error("Este archivo no es markdown")); // Rechaza la promesa si no es un archivo markdown
                }
            } else {
                reject(new Error("La ruta no existe")); // Rechaza la promesa si la ruta no existe
            }
        } catch (e) {
            reject(e); // Rechaza la promesa en caso de cualquier excepción ocurrida durante el proceso
        }
    });
};

// Exporta la función mdLinks para ser utilizada en otros archivos
module.exports = { mdLinks };
