import { Controller, Uuid } from "../../../types";
import { UserInfoToken } from "../../auth/login/loginService";

import { followToService } from "./followToService";

export const followToController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as UserInfoToken;
    const followingId = req.params.id as Uuid;
    await followToService(tokenInfo.id, followingId);
    res.status(201).json({ msg: "Has followed the user successfully" });
  } catch (error) {
    next(error);
  }
};
