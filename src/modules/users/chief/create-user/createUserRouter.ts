import { Router } from "express";
import { createUserController } from "./createUserController";
import { createUserSchema } from "./createUserSchema";
import { verifyBody } from "../../../../middlewares/verifyBody";

export const createUserRouter = Router();

createUserRouter.post("", verifyBody(createUserSchema), createUserController);
