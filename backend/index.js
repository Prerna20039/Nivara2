// Import Express
const express = require("express");
const app = express();

// Define the port
const PORT = process.env.PORT || 5000;

// Sample API endpoint
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
