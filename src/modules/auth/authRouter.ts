import { Router } from "express";
import { signupRouter } from "./signup/signupRouter";

export const authRouter = Router();

authRouter.use("/signup", signupRouter);
authRouter.use("/login", () => {});
