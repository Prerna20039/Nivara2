// Import Express
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

require('dotenv').config();
require('./Models/db');

// Define the port
const PORT =  5000;

// Sample API endpoint
app.get("/Ping", (req, res) => {
    res.send("Backend is running Prernaaa!");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
