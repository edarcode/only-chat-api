import { Router } from "express";
import { followToController } from "./followToController";
import { verifyParams } from "../../../middlewares/verifyParams";
import { verifyToken } from "../../../middlewares/verifyToken";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";

export const followToRouter = Router();

followToRouter.post(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema)],
  followToController
);
