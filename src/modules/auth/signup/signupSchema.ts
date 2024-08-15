import z from "zod";
import { usernameSchema } from "../../../zod-schemas/usernameSchema";
import { emailSchema } from "../../../zod-schemas/emailSchema";
import { passwordSchema } from "../../../zod-schemas/passwordSchema";

export const signupSchema = z
  .object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
  })
  .strict();
