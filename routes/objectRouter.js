import { Router } from "express";
import object_coords from "../middlewares/object_pos";

const objectRouter = Router();

objectRouter.get("/", (req,res) => {
    const objectNames = object_coords.map((obj) => obj.name);
    res.json(objectNames);
});

export default objectRouter;