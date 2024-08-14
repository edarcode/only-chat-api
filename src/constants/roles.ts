export const ROLE = {
  chief: "CHIEF",
  client: "CLIENT",
  admin: "ADMIN",
} as const;

export type Role = (typeof ROLE)[keyof typeof ROLE];
