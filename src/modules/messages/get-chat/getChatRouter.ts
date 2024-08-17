import { Router } from "express";
import { getChatController } from "./getChatController";
import { verifyToken } from "../../../middlewares/verifyToken";
import { verifyParams } from "../../../middlewares/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";

export const getChatRouter = Router();

getChatRouter.get(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema)],
  getChatController
);
