import jwt from "jsonwebtoken";
import ENV from "../config.js";

export default async function Auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
      
      
      const decodedToken = await jwt.verify(token, "JWT_SECRET");
      req.user = decodedToken;
      next();
  } catch (error) {
    return res.status(401).json({ error: " Authentication failed" });
  }
}
