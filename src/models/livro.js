import mongoose, { Schema, version } from "mongoose";
import { authorSchema } from "./author.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, require: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    author: authorSchema,
}, { versionKey: false });

const livro = mongoose.model("livro", livroSchema);

export default livro;