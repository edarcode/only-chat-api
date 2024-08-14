import { z } from "zod";
import { ROLE } from "../constants/roles";

export const roleSchema = z.enum([ROLE.chief, ROLE.client, ROLE.admin]);
