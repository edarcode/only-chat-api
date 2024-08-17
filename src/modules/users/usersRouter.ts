import { Router } from "express";
import { searchUserRouter } from "./search-user/searchUserRouter";
import { getAccountRouter } from "./get-account/getAccountRouter";

export const usersRouter = Router();

usersRouter.use("/search-user", searchUserRouter);
usersRouter.use("/get-account", getAccountRouter);
usersRouter.use("/edit-account", () => {});
usersRouter.use("/remove-account", () => {});
