import { Role } from "../constants/roles";
import { EdarErr } from "../error/EdarErr";
import { Middleware } from "../types";

export const verifyTokenRole = (role: Role): Middleware => {
  return (_req, res, next) => {
    try {
      const userRole = res.locals?.tokenInfo?.role;
      if (userRole !== role) throw new EdarErr(403, "Unautorized role");
      next();
    } catch (error) {
      next(error);
    }
  };
};
