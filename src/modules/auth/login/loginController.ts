import { Controller } from "../../../types";
import { loginService } from "./loginService";

export const loginController: Controller = async (req, res, next) => {
  try {
    const token = await loginService(req.body);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
