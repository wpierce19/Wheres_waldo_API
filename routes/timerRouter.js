import { Router } from "express";
import timeFunc from "../middlewares/timerFunc.js";

timeRouter = Router();

timeRouter.post("/game/start", (req,res) => {
    const userId = req.body.userId;
    timeFunc.startTimer(userId, () => {});
    res.json({message: "Timer Started"});
});

timeRouter.get("/game/time", (req,res) => {
    const userId = req.query.userId;
    const time = timeFunc.getTime(userId);
    res.json({time});
});

timeRouter.post("/game/stop", (req,res) => {
    const userId = req.body.userId;
    const finalTime = timeFunc.stopTimer(userId);
    res.json({message: "Timer Stopped.", finalTime});
});

export default timeRouter;