import { z } from "zod";
import { loginSchema } from "./loginSchema";
import { db } from "../../../db/db";
import { EdarErr } from "../../../error/EdarErr";
import jwt from "jsonwebtoken";
import { JWT } from "../../../constants/jwt";
import bcrypt from "bcrypt";
import { Uuid } from "../../../types";

export const loginService = async (login: Login) => {
  const user = await db.query.usersTable.findFirst({
    where: (users, { eq }) => eq(users.email, login.email),
  });
  if (!user) throw new EdarErr(401, "Invalid login");

  const isLogged = await bcrypt.compare(login.password, user.password);
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

type Login = z.infer<typeof loginSchema>;

export type UserInfoToken = {
  readonly id: Uuid;
  readonly role: "CHIEF" | "CLIENT" | "ADMIN";
  readonly username: string;
  readonly img: string;
};
