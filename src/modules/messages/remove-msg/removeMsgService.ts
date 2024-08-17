import { and, eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { messagesTable } from "../../../db/schema";
import { Uuid } from "../../../types";
import { EdarErr } from "../../../error/EdarErr";

export const removeMsgService = async (
  issuerId: Uuid,
  receptorId: Uuid,
  createdAt: string
) => {
  const result = await db
    .delete(messagesTable)
    .where(
      and(
        eq(messagesTable.issuerId, issuerId),
        eq(messagesTable.receptorId, receptorId),
        eq(messagesTable.createdAt, createdAt)
      )
    )
    .execute();

  if (result.rowsAffected === 0) throw new EdarErr(404, "Record not found");
};
