import { Router } from "express";
import { signupRouter } from "./signup/signupRouter";
import { verifySignupRouter } from "./verify-signup/verifySignupRouter";

export const authRouter = Router();

authRouter.use("/signup", signupRouter);
authRouter.use("/verify-signup", verifySignupRouter);
authRouter.use("/login", () => {});
