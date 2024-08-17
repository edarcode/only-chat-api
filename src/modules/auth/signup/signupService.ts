import jwt from "jsonwebtoken";
import { EdarErr } from "../../../error/EdarErr";
import { sendMailToVerifySignupService } from "./sendMailToVerifySignupService";
import { z } from "zod";
import { signupSchema } from "./signupSchema";
import { db } from "../../../db/db";
import { JWT } from "../../../constants/jwt";
import bcrypt from "bcrypt";
import { BCRYPT } from "../../../constants/bcrypt";

type Signup = z.infer<typeof signupSchema>;

export const signupService = async (signup: Signup) => {
  await checkSignup(signup);

  const newSignup = { ...signup };
  const passHashed = await bcrypt.hash(newSignup.password, BCRYPT.salt);
  newSignup.password = passHashed;

  const token = jwt.sign(newSignup, JWT.secret as string, {
    expiresIn: JWT.expiresInSignup,
  });

  const link = `${process.env.API_URL}/auth/verify-signup/${token}`;
  await sendMailToVerifySignupService(newSignup.email, link);
};

const checkSignup = async (signup: Signup) => {
  const user = await db.query.users.findFirst({
    where: (users, { or, eq }) => {
      return or(
        eq(users.email, signup.email),
        eq(users.username, signup.username)
      );
    },
  });
  if (user) throw new EdarErr(400, "Email or Username not available");
};
