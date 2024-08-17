import { Controller, Uuid } from "../../../types";
import { UserInfoToken } from "../../auth/login/loginService";
import { unfollowToService } from "./unfollowToService";

export const unfollowToController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as UserInfoToken;
    await unfollowToService(tokenInfo.id, req.params.id as Uuid);
    res.status(200).json({ msg: "Record deleted successfully" });
  } catch (error) {
    next(error);
  }
};
