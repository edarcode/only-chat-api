import { eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { users } from "../../../db/schema";
import { Uuid } from "../../../types";
import { EdarErr } from "../../../error/EdarErr";

export const getAccountService = async (id: Uuid) => {
  const queryResult = await db.query.users.findFirst({
    where: eq(users.id, id),
    columns: { id: true, username: true },
    with: {
      follows_followerId: {
        columns: {},
        with: {
          user_followingId: {
            columns: { id: true, username: true, img: true },
          },
        },
      },
      follows_followingId: { columns: { followerId: true } },
    },
  });

  if (!queryResult) throw new EdarErr(404, "User not found");

  const user = {
    id: queryResult.id,
    username: queryResult.username,
    following: queryResult.follows_followerId.map(
      (record) => record.user_followingId
    ),
    followers: queryResult.follows_followingId.map((record) => ({
      id: record.followerId,
    })),
  };

  return user;
};
