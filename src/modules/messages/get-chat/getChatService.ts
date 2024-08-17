import { db } from "../../../db/db";
import { Uuid } from "../../../types";

export const getChatService = async (issuerId: Uuid, receptorId: Uuid) => {
  const msgSent = await db.query.messages.findMany({
    where: (messages, { eq, and }) =>
      and(eq(messages.issuerId, issuerId), eq(messages.receptorId, receptorId)),
    orderBy: (messages, { desc }) => [desc(messages.createdAt)],
    limit: 2,
  });

  const msgReceived = await db.query.messages.findMany({
    where: (messages, { eq, and }) =>
      and(eq(messages.issuerId, receptorId), eq(messages.receptorId, issuerId)),
    orderBy: (messages, { desc }) => [desc(messages.createdAt)],
    limit: 2,
  });

  return [...msgSent, ...msgReceived].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
};
