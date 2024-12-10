const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Calculator API",
            version: "1.0.0",
            description: "API for basic arithmetic operations",
        },
    },
    apis: ["./server.js"], // Files containing Swagger annotations
};

const swaggerDocs = swaggerJsdoc(swaggerOptions); 

module.exports = { swaggerUi, swaggerDocs };