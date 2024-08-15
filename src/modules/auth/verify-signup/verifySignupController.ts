import { z } from "zod";
import { Controller } from "../../../types";
import { verifySignupService } from "./verifySignupService";
import { signupSchema } from "../signup/signupSchema";

export const verifySignupController: Controller = async (_req, res, next) => {
  try {
    await verifySignupService(res.locals.tokenInfo as SignupInfoToken);
    res.status(201).json({ msg: "Successfully registered user" });
  } catch (error) {
    next(error);
  }
};

type SignupInfoToken = z.infer<typeof signupSchema>;
