import { z } from "zod";
import { signupSchema } from "../signup/signupSchema";
import { db } from "../../../db/db";
import { usersTable } from "../../../db/schema";

export const verifySignupService = async (newUser: NewUser) => {
  await db.insert(usersTable).values({ ...newUser });
};

type NewUser = z.infer<typeof signupSchema>;
