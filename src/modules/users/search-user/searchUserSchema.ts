import z from "zod";
import { pageSchema } from "../../../zod-schemas/pageSchema";
import { limitSchema } from "../../../zod-schemas/limitSchema";
import { usernameSchema } from "../../../zod-schemas/usernameSchema";

export const searchUserSchema = z
  .object({
    page: pageSchema.optional(),
    limit: limitSchema.optional(),
    username: usernameSchema,
  })
  .strict();
