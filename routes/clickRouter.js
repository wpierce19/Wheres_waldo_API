import { Router } from "express";
import verifyClick from "../controllers/objectController.js";

const clickRouter = Router();

Router.post("/verify-click", (req,res) => {
    const {x,y} = req.body;

    const clickWidth = 0.015; //Can change if needed
    const clickHeight = 0.025;

    const x_min = x;
    const x_max = x + clickWidth;
    const y_min = y;
    const y_max = y + clickHeight;

    const objectName = verifyClick(x_min, x_max, y_min, y_max);

    if (objectName){
        res.json({name: objectName});
    }else {
        res.json({name: null});
    }
});

export default clickRouter;