import mongoose, { Schema, version } from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, require: true },
    nacionalidade: { type: String }
}, { versionKey: false });

const author = mongoose.model("author", authorSchema);

export { author, authorSchema };