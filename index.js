import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({

}));

app.use(express.json());

const port = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.send("FIne");
});

app.listen(port, () => {
    console.log(`App Listening on port : ${port}`);
})