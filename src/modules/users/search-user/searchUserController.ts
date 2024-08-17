import { z } from "zod";
import { Controller } from "../../../types";
import { UserInfoToken } from "../../auth/login/loginService";
import { searchUserService } from "./searchUserService";
import { searchUserSchema } from "./searchUserSchema";

export const searchUserController: Controller = async (_req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as UserInfoToken;
    const query = res.locals.query as Query;
    const users = await searchUserService(tokenInfo.id, query);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

type Query = z.infer<typeof searchUserSchema>;
