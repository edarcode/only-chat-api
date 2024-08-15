import { Router } from "express";
import { createUserRouter } from "./create-user/createUserRouter";

export const chiefRouter = Router();

chiefRouter.use("/create", createUserRouter);
