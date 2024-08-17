import { z } from "zod";
import { idSchema } from "../../../zod-schemas/idSchema";

export const removeMsgSchema = z
  .object({
    receptorId: idSchema,
    createdAt: z.string(),
  })
  .strict();
