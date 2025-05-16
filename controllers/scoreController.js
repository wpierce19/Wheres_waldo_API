import { PrismaClient } from "@prisma/client"
import asyncHandler from "express-async-handler";

const prisma = new PrismaClient();

const getScores = asyncHandler(async (req,res) => {
    const scores = await prisma.scores.findMany({});
    res.send(scores);
});

const saveScore = asyncHandler(async (req,res) => {
    const { username, time, clicks } = req.body;
    const data = { username, time, clicks };
    const newScore = await prisma.scores.create({ data });

    res.status(201).json(newScore); // ✅ SEND RESPONSE
});

export default {getScores, saveScore};