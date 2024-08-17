import { Controller, Uuid } from "../../../types";
import { UserInfoToken } from "../../auth/login/loginService";
import { getChatService } from "./getChatService";

export const getChatController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as UserInfoToken;
    const issuerId = tokenInfo.id;
    const receptorId = req.params.id as Uuid;
    const chat = await getChatService(issuerId, receptorId);
    res.json(chat);
  } catch (error) {
    next(error);
  }
};
