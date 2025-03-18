import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

//  user routers 

import carRoutes from "./routes/car.routes.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const port = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.send("FIne");
});

db();

app.use("/api/v2/car/", carRoutes);

app.listen(port, () => {
    console.log(`App Listening on port : ${port}`);
})