import express from "express";
import dbConnection from "./db/db.js";
import router from "./route/route.js";

import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
dbConnection();

// app.use(cors({
//     origin : "http://localhost:5173",
//     credentials : true
// }));

app.use(cors());

app.use(cookieParser);

app.use(express.json());

app.get("/hi", (req, res) => {
    res.send('Hello');
 })


app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log("server is running at", process.env.PORT)
})