import { Router } from "express";
import { searchUserController } from "./searchUserController";
import { searchUserSchema } from "./searchUserSchema";
import { verifyToken } from "../../../middlewares/verifyToken";
import { verifyQuery } from "../../../middlewares/verifyQuery";

export const searchUserRouter = Router();

searchUserRouter.get(
  "",
  [verifyToken, verifyQuery(searchUserSchema)],
  searchUserController
);
