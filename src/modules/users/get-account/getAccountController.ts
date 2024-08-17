import { Controller } from "../../../types";
import { UserInfoToken } from "../../auth/login/loginService";
import { getAccountService } from "./getAccountService";

export const getAccountController: Controller = async (_req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as UserInfoToken;
    const user = await getAccountService(tokenInfo.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
