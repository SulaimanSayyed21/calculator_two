const express = require("express");
const bodyParser = require("body-parser");
const calculator = require("./calculator");
const app = express();
const port = 3000;


// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to use the add function of calculator
app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({ result: calculator.add(a, b) });
});

app.post("/subtract", (req, res) => {    
    const { a, b } = req.body;
    res.send({ result: calculator.subtract(a, b) });
});

// Route to use the multiply function of calculator
app.post("/multiply", (req, res) => {
    const { a, b } = req.body;
    res.send({ result: calculator.multiply(a, b) });
});

// Route to use the divide function of calculator
app.post("/divide", (req, res) => {
    const { a, b } = req.body;
    res.send({ result: calculator.divide(a, b) });

});

//
app.get('/', (req, res) => {
    const result = calculator.add(5, 10);
    console.log('calling calculator api "add" with 5 and 10:',result);
    res.send(`The result is:${result}`);
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
