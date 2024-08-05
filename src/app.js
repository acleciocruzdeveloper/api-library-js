import express, { json } from 'express';
import connectDB from './config/dbConnect.js';
import routes from './router/index.js';

const connect = await connectDB();

connect.on("error", (error) => {
    console.error("connection error", error);
});

connect.once("open", () => {
    console.log("connection database success");
});

const app = express();
routes(app);



export default app;