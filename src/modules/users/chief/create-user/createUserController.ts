import { z } from "zod";
import { Controller } from "../../../../types";
import { createUserService } from "./createUserService";
import { createUserSchema } from "./createUserSchema";

export const createUserController: Controller = async (req, res, next) => {
  try {
    await createUserService(req.body as Body);
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

type Body = z.infer<typeof createUserSchema>;
