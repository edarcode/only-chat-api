import { z } from "zod";
import { Role } from "../../../db/schema";
import { Uuid } from "../../../types";
import { loginSchema } from "./loginSchema";

export const loginService = async (params: Params) => {
  console.log("login service");
};

type Params = z.infer<typeof loginSchema>;
export type TokenInfo = { id: Uuid; role: Role; username: string; img: string };
