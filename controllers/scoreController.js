import { PrismaClient } from "@prisma/client"
import asyncHandler from "express-async-handler";

const prisma = new PrismaClient();

const getScores = asyncHandler(async (req, res) => {
    const scores = await prisma.score.findMany({});
    res.send(scores);
});

const saveScore = async (req, res) => {
  try {
    console.log("📩 Incoming score submission:", req.body); // <--- Debug log

    const { username, time, clicks } = req.body;

    if (!username || typeof time !== 'number' || typeof clicks !== 'number') {
      console.error("❌ Invalid payload:", req.body);
      return res.status(400).json({ error: "Invalid payload" });
    }

    const data = { username, time, clicks };
    const newScore = await prisma.score.create({ data });

    res.status(201).json(newScore);
    console.log("✅Score saved!");
  } catch (err) {
    console.error("❌ Error saving score:", err); // Will show Prisma error
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {getScores, saveScore};