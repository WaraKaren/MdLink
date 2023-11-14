// Se importa el módulo 'path' para trabajar con rutas de archivos
const path = require("path");

// Se define un array con las extensiones de archivo Markdown reconocidas
const extensions = [".md", ".mkd", ".mdwn", ".mdown", ".mdtext", ".markdown", ".text"];

// Función isMdwnExtension que verifica si la extensión del archivo es de tipo Markdown
const isMdwnExtension = (filePath) => {
    // Obtiene la extensión del archivo proporcionado
    const fileExtension = path.extname(filePath);
    // Comprueba si la extensión obtenida está incluida en el array de extensiones de Markdown
    return extensions.includes(fileExtension);
};

// Exporta la función isMdwnExtension para que pueda ser utilizada por otros módulos
module.exports = { isMdwnExtension };
