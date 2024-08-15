import jwt from "jsonwebtoken";
import { EdarErr } from "../../../error/EdarErr";
import { sendMailToVerifySignupService } from "./sendMailToVerifySignupService";
import { z } from "zod";
import { signupSchema } from "./signupSchema";
import { db } from "../../../db/db";
import { usersTable } from "../../../db/schema";
import { eq } from "drizzle-orm";
import { JWT } from "../../../constants/jwt";
import bcrypt from "bcrypt";
import { BCRYPT } from "../../../constants/bcrypt";

export const signupService = async (signup: Signup) => {
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, signup.email),
  });
  if (user) throw new EdarErr(400, "Email not available");

  const newSignup = { ...signup };
  const passHashed = await bcrypt.hash(newSignup.password, BCRYPT.salt);
  newSignup.password = passHashed;

  const token = jwt.sign(newSignup, JWT.secret as string, {
    expiresIn: JWT.expiresInSignup,
  });

  const link = `${process.env.API_URL}/auth/verify-signup/${token}`;
  await sendMailToVerifySignupService(newSignup.email, link);
};

type Signup = z.infer<typeof signupSchema>;
