import { z } from "zod";
import { Controller, Uuid } from "../../../types";
import { UserInfoToken } from "../../auth/login/loginService";
import { saveMsgService } from "./saveMsgService";
import { saveMsgSchema } from "./saveMsgSchema";

export const saveMsgController: Controller = async (req, res, next) => {
  try {
    const tokenInfo = res.locals.tokenInfo as UserInfoToken;
    const issuerId = tokenInfo.id;
    const receptorId = req.params.id as Uuid;
    const body = req.body as Body;
    await saveMsgService(issuerId, receptorId, body);
    res.status(201).json({ msg: "Message saved successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

type Body = z.infer<typeof saveMsgSchema>;
