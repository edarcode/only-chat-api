import { z } from "zod";
import { searchUserSchema } from "./searchUserSchema";
import { Uuid } from "../../../types";
import { db } from "../../../db/db";

export const searchUserService = async (clientId: Uuid, search: Search) => {
  const users = await db.query.usersTable.findMany({
    where: (users, { like }) => like(users.username, `%${search.username}%`),
    columns: { id: true, username: true, img: true },
    limit: 10,
  });

  return users;
};

export type Search = z.infer<typeof searchUserSchema>;
