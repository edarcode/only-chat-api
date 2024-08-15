import { Router } from "express";
import { clientRouter } from "./client/clientRouter";

export const usersRouter = Router();

usersRouter.use("/chief", () => {});
usersRouter.use("/admin", () => {});
usersRouter.use("/client", clientRouter);
