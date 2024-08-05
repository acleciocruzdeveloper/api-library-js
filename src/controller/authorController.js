import { author } from "../models/author.js";

class AuthorController {

  static async allAuthors(req, res) {
    try {
      const response = await author.find({});
      res.status(200).json(
        { data: response }
      );
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} - no records found`
      });
    }
  }

  static async getAuthor(req, res) {
    try {
      const response = await author.findById(req.params.id);
      res.status(200).json({
        data: { response }
      });

    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} -  record not found`
      });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const response = await author.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ data: response });
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} -  update book failed`
      });
    }

  }

  static async registerAuthor(req, res) {
    try {
      const response = await author.create(req.body);
      res.status(201).json({ data: response });
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} - failed when trying to register author`
      });
    }
  }

  static async deleteRegisteredAuthor(req, res) {
    try {
      await author.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: "record delete" });
    } catch (error) {
      res.status(500).json({
        message: `${error.messageq} -  filed when trying delete book`
      });
    }
  }

}


export default AuthorController;