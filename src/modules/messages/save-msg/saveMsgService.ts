import { z } from "zod";
import { Uuid } from "../../../types";
import { saveMsgSchema } from "./saveMsgSchema";
import { db } from "../../../db/db";
import { messages } from "../../../db/schema";

export const saveMsgService = async (
  issuerId: Uuid,
  receptorId: Uuid,
  { text }: Msg
) => {
  await db.insert(messages).values({ issuerId, receptorId, text });
};

type Msg = z.infer<typeof saveMsgSchema>;
