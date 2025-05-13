import { Router } from "express";
import scoreController from "../controllers/scoreController";

const scoreRouter = Router();

scoreRouter.get("/scoreboard", scoreController.getScores);
scoreRouter.post("/scoreboard", scoreController.saveScore);

export default scoreRouter;