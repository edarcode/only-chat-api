import { Router } from "express";
import { saveMsgRouter } from "./save-msg/saveMsgRouter";

export const messageRouter = Router();

messageRouter.use("/save-msg", saveMsgRouter);
