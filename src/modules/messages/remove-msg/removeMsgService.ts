import { and, eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { messages } from "../../../db/schema";
import { Uuid } from "../../../types";
import { EdarErr } from "../../../error/EdarErr";

export const removeMsgService = async (
  issuerId: Uuid,
  receptorId: Uuid,
  createdAt: string
) => {
  const result = await db
    .delete(messages)
    .where(
      and(
        eq(messages.issuerId, issuerId),
        eq(messages.receptorId, receptorId),
        eq(messages.createdAt, createdAt)
      )
    )
    .execute();

  if (result.rowsAffected === 0) throw new EdarErr(404, "Record not found");
};
