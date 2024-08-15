import { z } from "zod";
import { Controller } from "../../../types";
import { signupSchema } from "./signupSchema";
import { signupService } from "./signupService";

export const signupController: Controller = async (req, res, next) => {
  try {
    await signupService(req.body as Body);
    res
      .status(201)
      .json({ msg: "We have sent an email with a confirmation link" });
  } catch (error) {
    next(error);
  }
};

type Body = z.infer<typeof signupSchema>;
