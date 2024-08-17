import { db } from "../../../db/db";
import { EdarErr } from "../../../error/EdarErr";
import { Uuid } from "../../../types";

export const getAccountService = async (id: Uuid) => {
  const account = await db.query.usersTable.findFirst({
    where: (user, { eq }) => eq(user.id, id),
    with: true,
  });

  if (!account) throw new EdarErr(404, "Account not found");

  return account;
};
