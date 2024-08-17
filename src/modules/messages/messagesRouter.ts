import { Router } from "express";
import { saveMsgRouter } from "./save-msg/saveMsgRouter";
import { removeMsgRouter } from "./remove-msg/removeMsgRouter";

export const messagesRouter = Router();

messagesRouter.use("/save-msg", saveMsgRouter);
messagesRouter.use("/remove-msg", removeMsgRouter);
