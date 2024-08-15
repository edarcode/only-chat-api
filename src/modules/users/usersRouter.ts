import { Router } from "express";
import { chiefRouter } from "./chief/chiefRouter";

export const usersRouter = Router();

usersRouter.use("/chief", chiefRouter);
usersRouter.use("/admin", () => {});
usersRouter.use("/client", () => {});
