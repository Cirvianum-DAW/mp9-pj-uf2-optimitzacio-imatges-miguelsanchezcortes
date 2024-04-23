const sharp = require("sharp");
const fs = require("fs");

const imagesToOptimize = [
    {
      input: './src/img/fornAntic.jpg',
      output: './src/img/fornAntic_optimitzada.avif',
    },
    {
        input: './src/img/productes.jpg',
        output: './src/img/productes_optimitzada.avif',
    },
    {
        input: './src/img/baguet.jpg',
        output: './src/img/baguet_optimitzada.avif',
    },
    {
        input: './src/img/baguet2.jpg',
        output: './src/img/baguet2_optimitzada.avif',
    },
    {
        input: './src/img/brioixeria.jpg',
        output: './src/img/brioixeria_optimitzada.avif',
    },
    {
        input: './src/img/brioixeria2.jpg',
        output: './src/img/brioixeria2_optimitzada.avif',
    },
    {
        input: './src/img/chapata2.jpg',
        output: './src/img/chapata2_optimitzada.avif',
    },
    {
        input: './src/img/coques.jpg',
        output: './src/img/coques_optimitzada.avif',
    },
    {
        input: './src/img/integral2.jpg',
        output: './src/img/integral2_optimitzada.avif',
    },
    {
        input: './src/img/molde2.jpg',
        output: './src/img/molde2_optimitzada.avif',
    },
    {
        input: './src/img/pages2.jpg',
        output: './src/img/pages2_optimitzada.avif',
    },
    {
        input: './src/img/pans2.jpg',
        output: './src/img/pans2_optimitzada.avif',
    },
    {
        input: './src/img/phone.png',
        output: './src/img/phone_optimitzada.avif',
    },
    {
        input: './src/img/pretzel2.jpg',
        output: './src/img/pretzel2_optimitzada.avif',
    },
    {
        input: './src/img/productes.jpg',
        output: './src/img/productes_optimitzada.avif',
    }

  ];
  
// Función para optimizar una imagen
const optimizeImage = ({ input, output }) => {
    sharp(input)
      .resize({ width: 800 }) 
      .toFile(output, (err, info) => {
        if (err) {
          console.error(`Error al optimizar la imagen ${input}:`, err);
        } else {
          console.log(`Imagen optimizada y guardada correctamente: ${output}`);
          console.log(info);
        }
      });
  };

  imagesToOptimize.forEach(optimizeImage);