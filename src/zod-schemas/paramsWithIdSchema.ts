import { z } from "zod";
import { idSchema } from "./idSchema";

export const paramsWithIdSchema = z.object({ id: idSchema }).strict();
