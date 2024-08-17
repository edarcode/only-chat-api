import { and, eq } from "drizzle-orm";
import { db } from "../../../db/db";
import { follows } from "../../../db/schema";
import { Uuid } from "../../../types";
import { EdarErr } from "../../../error/EdarErr";

export const unfollowToService = async (
  followerId: Uuid,
  followingId: Uuid
) => {
  const result = await db
    .delete(follows)
    .where(
      and(
        eq(follows.followerId, followerId),
        eq(follows.followingId, followingId)
      )
    )
    .execute();

  if (result.rowsAffected === 0) throw new EdarErr(404, "Record not found");
};
