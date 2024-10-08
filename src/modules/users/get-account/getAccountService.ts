import { eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { follows, users } from "../../../db/schema";
import { Uuid } from "../../../types";
import { EdarErr } from "../../../error/EdarErr";

export const getAccountService = async (id: Uuid) => {
  const [user] = await db
    .select({
      id: users.id,
      username: users.username,
      createdAt: users.createdAt,
      img: users.img,
    })
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  if (!user) throw new EdarErr(404, "User not found");

  const [following, followers] = await Promise.all([
    db
      .select({ id: users.id, username: users.username, img: users.img })
      .from(follows)
      .where(eq(follows.followerId, id))
      .innerJoin(users, eq(users.id, follows.followingId)),

    db
      .select({ id: users.id, username: users.username, img: users.img })
      .from(follows)
      .where(eq(follows.followingId, id))
      .innerJoin(users, eq(users.id, follows.followerId)),
  ]);

  return { ...user, following, followers };
};
