import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT } from "../../../constants/jwt";

export const refreshTokenService = (token: string) => {
  const tokenInfo = jwt.decode(token) as JwtPayload;

  const newTokenInfo = { ...tokenInfo };
  if (newTokenInfo.iat) delete newTokenInfo.iat;
  if (newTokenInfo.exp) delete newTokenInfo.exp;

  const newToken = jwt.sign(newTokenInfo, JWT.secret as string, {
    expiresIn: JWT.expiresIn,
  });

  return newToken;
};
