import { z } from "zod";
import { Controller, Uuid } from "../../../types";
import { removeMsgService } from "./removeMsgService";
import { removeMsgSchema } from "./removeMsgSchema";
import { UserInfoToken } from "../../auth/login/loginService";

export const removeMsgController: Controller = async (_req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as UserInfoToken;
    const issuerId = tokenInfo.id;
    const { receptorId, createdAt } = res.locals.body as Body;
    await removeMsgService(issuerId, receptorId as Uuid, createdAt);
    res.status(200).json({ msg: "Record deleted successfully" });
  } catch (error) {
    next(error);
  }
};

type Body = z.infer<typeof removeMsgSchema>;
