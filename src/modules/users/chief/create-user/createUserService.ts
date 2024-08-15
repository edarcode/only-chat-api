import { z } from "zod";
import { createUserSchema } from "./createUserSchema";
import { db } from "../../../../db/db";
import { usersTable } from "../../../../db/schema";

export const createUserService = async (params: Params) => {
  await db.insert(usersTable).values(params).run();
};

type Params = z.infer<typeof createUserSchema>;
