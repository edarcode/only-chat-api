import jwt from "jsonwebtoken";
import { JWT } from "../constants/jwt";
import { EdarErr } from "../error/EdarErr";
import { Middleware } from "../types";

export const verifyTokenSentByParams: Middleware = (req, res, next) => {
  try {
    const token = req.params.token;
    if (!token) throw new EdarErr(401, "Unauthorized");

    jwt.verify(token, JWT.secret as string, (err, tokenInfo) => {
      if (err) throw new EdarErr(401, "Unauthorized token");
      res.locals = { ...res.locals, tokenInfo };
      next();
    });
  } catch (error) {
    next(error);
  }
};
