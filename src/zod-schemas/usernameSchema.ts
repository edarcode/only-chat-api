import { z } from "zod";
import { REGEX } from "../regex/regex";

export const usernameSchema = z
  .string()
  .min(3)
  .max(15)
  .refine((name) => !REGEX.specialCharacters.test(name), {
    message: "No special characters",
  })
  .refine((name) => !REGEX.space.test(name), {
    message: "No spaces",
  });
