import { z } from "zod";

export const saveMsgSchema = z
  .object({
    text: z.string(),
  })
  .strict();
