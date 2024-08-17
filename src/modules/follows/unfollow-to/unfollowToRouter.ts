import { Router } from "express";
import { unfollowToController } from "./unfollowToController";
import { verifyToken } from "../../../middlewares/verifyToken";
import { verifyParams } from "../../../middlewares/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";

export const unfollowToRouter = Router();

unfollowToRouter.delete(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema)],
  unfollowToController
);
