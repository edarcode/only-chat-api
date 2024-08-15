import jwt from "jsonwebtoken";
import { EdarErr } from "../../../error/EdarErr";
import { sendMailToVerifySignupService } from "./sendMailToVerifySignupService";
import { z } from "zod";
import { signupSchema } from "./signupSchema";
import { db } from "../../../db/db";
import { usersTable } from "../../../db/schema";
import { eq } from "drizzle-orm";
import { JWT } from "../../../constants/jwt";

export const signupService = async (params: Params) => {
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, params.email),
  });

  if (user) throw new EdarErr(400, "Email not available");

  const token = jwt.sign(params, JWT.secret as string, {
    expiresIn: JWT.expiresInSignup,
  });

  const link = `${process.env.API_URL}/auth/verify-signup/${token}`;
  await sendMailToVerifySignupService(params.email, link);
};

type Params = z.infer<typeof signupSchema>;
