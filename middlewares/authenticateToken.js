import jwt from "jsonwebtoken";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("🛡️ Auth Header:", authHeader);

  if (!token) {
    console.warn("⚠️ No token provided.");
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.warn("❌ Invalid token.");
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

export default authenticateJWT;