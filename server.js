import express from 'express'; // Importación de Express
import path from 'path'; // Importación de Path
import { fileURLToPath } from 'url'; // Módulo necesario para manejar __dirname en ES6

const app = express();

// Simular __dirname en ES6
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// Para cualquier solicitud que no coincida con un archivo estático, servir index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Exponer puerto
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
