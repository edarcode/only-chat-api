import { Router } from "express";
import { removeMsgController } from "./removeMsgController";
import { removeMsgSchema } from "./removeMsgSchema";
import { verifyToken } from "../../../middlewares/verifyToken";
import { verifyBody } from "../../../middlewares/verifyBody";

export const removeMsgRouter = Router();

removeMsgRouter.delete(
  "/",
  [verifyToken, verifyBody(removeMsgSchema)],
  removeMsgController
);
