/* eslint-disable no-underscore-dangle, no-console */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Simula __dirname en ES6
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// Para solicitudes que no coincidan con archivos estáticos, servir index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Puerto del servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
