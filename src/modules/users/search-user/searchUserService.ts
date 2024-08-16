import { z } from "zod";
import { searchUserSchema } from "./searchUserSchema";
import { Uuid } from "../../../types";

export const searchUserService = async (clientId: Uuid, params: Params) => {};

export type Params = z.infer<typeof searchUserSchema>;
