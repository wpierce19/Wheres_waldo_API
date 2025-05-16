import express from "express";
import path from "path";
import scoreRouter from "./routes/scoreRouter.js";
import cors from "cors";
import authenticateJWT from "./middlewares/authenticateToken.js";
import timerRouter from "./routes/timerRouter.js";
import authRouter from "./routes/authRouter.js";
import clickRouter from "./routes/clickRouter.js";
import objectRouter from "./routes/objectRouter.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(cors());

app.use("/auth", authRouter);
app.use("/scoreboard", authenticateJWT, scoreRouter);
app.use("/game",authenticateJWT, timerRouter);
app.use("/verify-click", authenticateJWT, clickRouter)
app.use("/objects", authenticateJWT, objectRouter);

app.use((err, req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
    });
});

app.listen(port, () => {
    console.log(`API listening on port: ${port}`);
});