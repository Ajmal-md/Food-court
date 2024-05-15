// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
const port = 3000; // Choose a port for your server

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to receive data from the website
app.post('/receive-data', (req, res) => {
    const { message } = req.body; // Assuming the website sends a JSON object with a "message" property
    console.log('Received message from website:', message);
    res.send('Message received successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
