import { Router } from "express";
import { searchUserRouter } from "./search-user/searchUserRouter";

export const usersRouter = Router();

usersRouter.use("/search-user", searchUserRouter);
usersRouter.use("/get-account", () => {});
usersRouter.use("/edit-account", () => {});
usersRouter.use("/remove-account", () => {});
