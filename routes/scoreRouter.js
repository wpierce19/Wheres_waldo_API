import { Router } from "express";
import scoreController from "../controllers/scoreController.js";

const scoreRouter = Router();

scoreRouter.get("/", scoreController.getScores);
scoreRouter.post("/", scoreController.saveScore);

export default scoreRouter;