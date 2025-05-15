import express from "express";
import path from "path";
import scoreRouter from "./routes/scoreRouter";
import cors from "cors";
import authenticateJWT from "./middlewares/authenticateToken";
import timerRouter from "./routes/timerRouter";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(cors());

app.use("/scoreboard", authenticateJWT, scoreRouter);
app.use("/game", timerRouter);

app.use((err, req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
    });
});

app.listen(port, () => {
    console.log(`API listening on port: ${port}`);
});