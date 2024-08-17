import { Router } from "express";

import { verifyToken } from "../../../middlewares/verifyToken";
import { verifyParams } from "../../../middlewares/verifyParams";
import { paramsWithIdSchema } from "../../../zod-schemas/paramsWithIdSchema";
import { verifyBody } from "../../../middlewares/verifyBody";
import { saveMsgSchema } from "./saveMsgSchema";
import { saveMsgController } from "./saveMsgController";

export const saveMsgRouter = Router();

saveMsgRouter.post(
  "/:id",
  [verifyToken, verifyParams(paramsWithIdSchema), verifyBody(saveMsgSchema)],
  saveMsgController
);
