import { z } from "zod";
import { usersTable } from "../../../db/schema";
import { loginSchema } from "./loginSchema";
import { db } from "../../../db/db";
import { eq } from "drizzle-orm";
import { EdarErr } from "../../../error/EdarErr";
import jwt from "jsonwebtoken";
import { JWT } from "../../../constants/jwt";

export const loginService = async (params: Params) => {
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, params.email),
  });
  if (!user) throw new EdarErr(401, "Invalid login");

  const isLogged = user.password === params.password;
  if (!isLogged) throw new EdarErr(401, "Invalid login");

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      username: user.username,
      img: user.img,
    },
    JWT.secret as string,
    { expiresIn: JWT.expiresIn }
  );

  return token;
};

type Params = z.infer<typeof loginSchema>;

export type UserInfoToken = {
  readonly id: string;
  readonly role: "CHIEF" | "CLIENT" | "ADMIN";
  readonly username: string;
  readonly img: string;
};
