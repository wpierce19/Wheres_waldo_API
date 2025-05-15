import { Router } from "express";
import jwt from "jsonwebtoken";

const authRouter = Router();

authRouter.post("/token", (req,res) => {
    const {userId} = req.body;

    if (!userId) {
        return res.status(400).json({error: "Missing userId"});
    }

    const token = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "2h",
    });

    res.json({token});
});

export default authRouter;