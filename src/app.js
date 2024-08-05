import express, { json } from 'express';
import connectDB from './config/dbConnect.js';
import routes from './router/index.js';
// import { collectDefaultMetics as collectDefaultMetrics, register } from 'prom-client'

// collectDefaultMetrics();

const connect = await connectDB();

connect.on("error", (error) => {
    console.error("connection error", error);
});

connect.once("open", () => {
    console.log("connection database success");
});

const app = express();
routes(app);

// app.get("/metrics", async (req, res) => {
//     try {
//         res.set("content-Type", register.contentType);
//         res.end(await register.metrics());
//     } catch (error) {
//         res.status(500).end(error)
//     }
// });


export default app;