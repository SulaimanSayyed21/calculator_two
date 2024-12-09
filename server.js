const express = require("express");
const calculator = require("./calculator");
const app = express();
const port = 3000;
// Define routes

// Route to use the add function of calculator
app.post("/add", (req, res) => {

});

// Route to use the subtract function of calculator
app.post("/subtract", (req, res) => {

});

// Route to use the multiply function of calculator
app.post("/multiply", (req, res) => {

});

// Route to use the divide function of calculator
app.post("/divide", (req, res) => {

});

//
app.get('/', (req, res) => {
res.send('Server is running on localhost:3000');

});
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});