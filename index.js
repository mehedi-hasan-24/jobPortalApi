const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDoc = YAML.load("./swagger.yaml");

const app = express();
app.use(express.json());
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get("/health", (_req, res)=>{
    res.status(200).json({
        health: "OK"
    })
});

app.get("/api/v1/companies", (req, res)=>{
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sortType = req.query.sort_type || "asc";
    const sortBy = req.query.sort_by || "updatedAt";
    const searchTerm = req.query.search || "name"

    res.status(200).json({
        path: req.path,
    })
})

app.listen(4000, ()=>{
    console.log("server is listening on port");
})