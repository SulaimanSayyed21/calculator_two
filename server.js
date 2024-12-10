const express = require("express");
const bodyParser = require("body-parser");
const calculator = require("./calculator");
const app = express();
const { swaggerUi, swaggerDocs } = require("./swagger");

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Add Swagger UI middleware
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /add:
 *   post:
 *     description: Add two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Sum of the two numbers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */

// Route to use the add function of calculator
app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({ result: calculator.add(a, b) });
});

/**
 * @swagger
 * /subtract:
 *   post:
 *     description: Subtract two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Difference of the two numbers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */


app.post("/subtract", (req, res) => {
    const { a, b } = req.body;
    res.send({ result: calculator.subtract(a, b) });
});

/**
 * @swagger
 * /multiply:
 *   post:
 *     description: Multiply two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Product of the two numbers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */


// Route to use the multiply function of calculator
app.post("/multiply", (req, res) => {
    const { a, b } = req.body;
    res.send({ result: calculator.multiply(a, b) });
});

/**
 * @swagger
 * /divide:
 *   post:
 *     description: Divide two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Quotient of the two numbers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       '400':
 *         description: Bad Request - Division by zero
 */


// Route to use the divide function of calculator
app.post("/divide", (req, res) => {
    const { a, b } = req.body;
    res.send({ result: calculator.divide(a, b) });

});

//
app.get('/', (req, res) => {

});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);










