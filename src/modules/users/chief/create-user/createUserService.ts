import { z } from "zod";
import { createUserSchema } from "./createUserSchema";

export const createUserService = async (params: Params) => {};

type Params = z.infer<typeof createUserSchema>;
