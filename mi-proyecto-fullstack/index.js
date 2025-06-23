const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api/hola', (req, res) => {
  res.json({ mensaje: 'Hola desde el backend!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
