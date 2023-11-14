// Se importa el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Función fReadFile que utiliza 'fs.promises.readFile' para leer el contenido de un archivo
const fReadFile = (readFile) =>{
  return fs.promises.readFile(readFile) // Utiliza fs.promises.readFile para leer el contenido del archivo

    // En un principio, aquí se manejan errores al leer el archivo y se muestra el contenido
    /* .then(data => {
      console.log(data); // Muestra el contenido del archivo
      return data; // Retorna los datos leídos del archivo
    })
    .catch(error => {
      console.log("error: ", error); // Muestra errores si los hay
      throw error; // Lanza una excepción si ocurre un error al leer el archivo
    }); */
};

// Exporta la función fReadFile para que pueda ser utilizada por otros módulos
module.exports = fReadFile;
