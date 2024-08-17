import { db } from "../../../db/db";
import { followsTable } from "../../../db/schema";
import { Uuid } from "../../../types";

export const followToService = async (followerId: Uuid, followingId: Uuid) => {
  await db.insert(followsTable).values({ followerId, followingId });
};
