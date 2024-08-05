import express from "express";
import livros from "./bookRouter.js";
import authors from "./authorRouter.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("curso de NodeJs"));
    app.use(express.json(), livros, authors);
};

export default routes;

