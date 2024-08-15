import { Controller } from "../../../types";
import { verifySignupService } from "./verifySignupService";

export const verifySignupController: Controller = async (_req, res, next) => {
  try {
    await verifySignupService(res.locals.tokenInfo);
    res.status(201).json({ msg: "Successfully registered user" });
  } catch (error) {
    next(error);
  }
};
