import { z } from "zod";

export const takeSchema = z.coerce.number().min(1);
