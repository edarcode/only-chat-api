import { Router } from "express";
import { saveMsgRouter } from "./save-msg/saveMsgRouter";
import { removeMsgRouter } from "./remove-msg/removeMsgRouter";

export const messageRouter = Router();

messageRouter.use("/save-msg", saveMsgRouter);
messageRouter.use("/remove-msg", removeMsgRouter);
