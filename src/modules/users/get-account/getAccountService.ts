import { eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { users } from "../../../db/schema";
import { Uuid } from "../../../types";

export const getAccountService = async (id: Uuid) => {
  const user = await db
    .select({
      id: users.id,
      username: users.username,
      img: users.img,
      email: users.email,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  return user;
};
