const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = 3000;
const roomsRoutes = require('./routes/roomsRoutes');
const clientsRoutes = require('./routes/clientsRoutes');


// Precise a mon API que je vais utiliser du JSON
app.use(express.json());

//Precise a mon API que je veux utiliser des routes de mon fichier roomsRoutes.js
// ATTENTION : Toutes les routes de roomsRoutes.js commenceront par /rooms
app.use('/rooms', roomsRoutes);
app.use ('/clients', clientsRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Lance le serveur express sur le port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});