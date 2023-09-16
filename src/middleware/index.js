
const swaggerUI = require("swagger-ui-express");
const OpenApiValidator = require('express-openapi-validator');
const YAML = require("yamljs");
const swaggerDoc = YAML.load("./swagger.yaml");

const express = require("express");

const applyMiddleWare = (app) => {
    
    app.use(express.json());
    app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

    app.use(
        OpenApiValidator.middleware({
        apiSpec: './swagger.yaml',
        }),
    );
    

    app.use((err, req, res, next) => {
        // format error
        res.status(err.status || 500).json({
            message: err.message,
            errors: err.errors,
        });
    });
}

module.exports = applyMiddleWare;