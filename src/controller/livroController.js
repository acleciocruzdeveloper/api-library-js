import { author } from "../models/author.js";
import livro from "../models/livro.js";

class LivroController {

  static async allBooks(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json({
        data: { listaLivros }
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} - falha ao cadastrar livro`
      });
    }
  }

  static async getBook(req, res) {
    try {
      const response = await livro.findById(req.params.id);
      res.status(200).json({
        data: { response }
      });

    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} -  book not found`
      });
    }
  }

  static async updateBook(req, res) {
    try {
      const response = await livro.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} -  update book failed`
      });
    }

  }

  static async createdBook(req, res) {
    const responseBook = req.body
    try {
      const responseAuthor = await author.findById(responseBook.author);
      const newBook = { ...responseBook, author: { ...responseAuthor._doc } };
      const response = await livro.create(newBook);

      res.status(201).json({ data: response });
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} - falha ao cadastrar livro`
      });
    }
  }

  static async deleteBook(req, res) {
    try {
      await livro.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: "livro exluido" });
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} -  delete book failed`
      });
    }
  }

  static async searchBookParam(req, res) {
    const q = req.query.editora;
    try {
      const response = await livro.find({ editora: q });
      res.status(200).json({ data: response })
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} -  delete book failed`
      });
    }
  }

}


export default LivroController;