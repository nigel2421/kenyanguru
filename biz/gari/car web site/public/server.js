const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // You can change this port number

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Set up static file serving for public files (HTML, CSS, JavaScript, images)
app.use(express.static('public'));

// Define a route to serve the cars.json data (or other data source)
app.get('/cars', (req, res) => {
  res.sendFile(__dirname + '/data/cars.json'); 
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});