import { Router } from "express";
import timeFunc from "../middlewares/timerFunc.js";

const timeRouter = Router();

timeRouter.post("/start", (req,res) => {
    const userId = req.body.userId;
    timeFunc.startTimer(userId, () => {});
    res.json({message: "Timer Started"});
});

timeRouter.get("time", (req,res) => {
    const userId = req.query.userId;
    const time = timeFunc.getTime(userId);
    res.json({time});
});

timeRouter.post("/stop", (req,res) => {
    const userId = req.body.userId;
    const finalTime = timeFunc.stopTimer(userId);
    res.json({message: "Timer Stopped.", finalTime});
});

export default timeRouter;