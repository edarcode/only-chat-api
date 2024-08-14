import z from "zod";
import { usernameSchema } from "../../../../zod-schemas/usernameSchema";
import { emailSchema } from "../../../../zod-schemas/emailSchema";
import { passwordSchema } from "../../../../zod-schemas/passwordSchema";
import { roleSchema } from "../../../../zod-schemas/roleSchema";
import { imgSchema } from "../../../../zod-schemas/imgSchema";

export const createUserSchema = z
  .object({
    role: roleSchema.optional(),
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    img: imgSchema.optional(),
  })
  .strict();
