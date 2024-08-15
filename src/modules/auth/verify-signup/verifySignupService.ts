import { z } from "zod";
import { signupSchema } from "../signup/signupSchema";

export const verifySignupService = async (params: Param) => {
  console.log("verify signup");
};

type Param = z.infer<typeof signupSchema>;
