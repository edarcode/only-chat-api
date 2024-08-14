import { ZodSchema } from "zod";
import { Middleware } from "../types";

export const verifyParams = (schema: ZodSchema): Middleware => {
  return (req, res, next) => {
    try {
      const params: ZodSchema = schema.parse(req.params);
      res.locals = { ...res.locals, params };
      next();
    } catch (error) {
      next(error);
    }
  };
};
