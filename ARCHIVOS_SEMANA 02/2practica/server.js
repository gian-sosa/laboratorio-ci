// Importamos express
const express = require('express');
const app = express();

// Definimos un puerto
const PORT = 4000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
