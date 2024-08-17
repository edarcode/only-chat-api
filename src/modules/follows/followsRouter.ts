import { Router } from "express";
import { followToRouter } from "./follow-to/followToRouter";

export const followsRouter = Router();

followsRouter.use("/follow-to", followToRouter);
