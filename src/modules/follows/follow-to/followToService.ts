import { db } from "../../../db/db";
import { follows } from "../../../db/schema";
import { Uuid } from "../../../types";

export const followToService = async (followerId: Uuid, followingId: Uuid) => {
  await db.insert(follows).values({ followerId, followingId });
};
