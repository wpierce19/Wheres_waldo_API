import object_coords from "../middlewares/object_pos.js"

const verifyClick = (x_min,x_max,y_min,y_max) => {
    const foundObject = object_coords.find((obj) => {
        return (
            x_min >= obj.x_min &&
            x_max <= obj.x_max &&
            y_min >= obj.y_min &&
            y_max <= obj.y_max 
        );
    });
    return foundObject?.name || null;
};

export default verifyClick;