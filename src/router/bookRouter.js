import express from "express";
import LivroController from "../controller/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.allBooks);
routes.get("/livros/search", LivroController.searchBookParam);
routes.get("/livros/:id", LivroController.getBook);
routes.post("/livros", LivroController.createdBook);
routes.put("/livros/:id", LivroController.updateBook);
routes.delete("/livros/:id", LivroController.deleteBook);

export default routes;