import { PrismaClient } from "@prisma/client"
import asyncHandler from "express-async-handler";

const prisma = new PrismaClient();

const getScores = asyncHandler(async (req,res) => {
    const scores = await prisma.scores.findMany({})
});

const saveScore = asyncHandler(async (req,res) => {
    const {username, time, clicks} = req.body;
    const data = {username: username, time: time, clicks: clicks};
    const newScore = await prisma.scores.create({data});
    res.send(newScore);
});

export default {getScores, saveScore};