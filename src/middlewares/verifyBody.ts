import { ZodSchema } from "zod";
import { Middleware } from "../types";

export const verifyBody = (schema: ZodSchema): Middleware => {
  return (req, res, next) => {
    try {
      const body: ZodSchema = schema.parse(req.body);
      res.locals = { ...res.locals, body };
      next();
    } catch (error) {
      next(error);
    }
  };
};
