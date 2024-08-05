import express from "express";
import AuthorController from "../controller/authorController.js";

const routes = express.Router();

routes.get("/autores", AuthorController.allAuthors);
routes.get("/autores/:id", AuthorController.getAuthor);
routes.post("/autores", AuthorController.registerAuthor);
routes.put("/autores/:id", AuthorController.updateAuthor);
routes.delete("/autores/:id", AuthorController.deleteRegisteredAuthor);

export default routes;