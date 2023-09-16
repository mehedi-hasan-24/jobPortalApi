const express = require("express");
const applyMiddleware = require("./middleware");


const app = express();
applyMiddleware(app);


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
});

  module.exports = app;