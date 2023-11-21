const { isMdwnExtension } = require("./../lib/markdown.js");

describe("isMdwnExtension", () => {
  it("deberia devolver true si la ruta es un archivo md", () => {
    const path =
      "C:/Users/Hewlett Packard/Desktop/LABORATORIA CODIGO/DEV010-md-links/README.md";
    expect(isMdwnExtension(path)).toBe(true);
  });
  it("Deberia devolver false si la ruta es un archivo md", () => {
    const path =
      "C:/Users/Hewlett Packard/Desktop/LABORATORIA CODIGO/DEV010-md-links/thumb.png";
    expect(isMdwnExtension(path)).toBe(false);
  });
});

//FIXME: test de ReadFile
const fReadFile = require("./../lib/funReadFile.js");

describe("fReadFile", () => {
  it.only('debería leer el contenido de un archivo', () => {
    const archivo = 'C:/Users/Hewlett Packard/Desktop/LABORATORIA CODIGO/DEV010-md-links/examples/ejemploTest.md';
    const contenidoEsperado =  "Google  [Enlace a Google](https://www.google.com).";
// expect(fReadFile(archivo)).toBe('Google')
// console.log(fReadFile(archivo))
return fReadFile(archivo).then(data => {
  expect(data).toBe(contenidoEsperado);
});
  });
});



//FIXME: test para la funcion para extraer links

const links = require("./../lib/funLiks.js");

describe("links", () => {
  it("debería retornar un array de objetos con los enlaces encontrados", () => {
    const contenido =
      "ejemplo de un enlace [enlace](https://www.ejemplo.com) en un texto.";
    const resultadoEsperado = [
      { titulo: "enlace", url: "https://www.ejemplo.com" },
    ];

    expect(links(contenido)).toEqual(resultadoEsperado);
  });

});
