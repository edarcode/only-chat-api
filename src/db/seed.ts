import "../utils/dotenv";
import { BCRYPT } from "../constants/bcrypt";
import { db } from "./db";
import { ROLE, usersTable } from "./schema";
import bcrypt from "bcrypt";

const EDARCODE = {
  username: process.env.CHIEF_USERNAME as string,
  email: process.env.CHIEF_EMAIL as string,
  password: process.env.CHIEF_PASSWORD as string,
  role: ROLE.chief,
};

const LORE = {
  username: "lore",
  email: "lore@gmail.com",
  password: "123456",
  role: ROLE.client,
};

const seedUsers = async () => {
  // await db.delete(usersTable).execute();
  EDARCODE.password = await bcrypt.hash(EDARCODE.password, BCRYPT.salt);
  LORE.password = await bcrypt.hash(LORE.password, BCRYPT.salt);

  await db.insert(usersTable).values([EDARCODE, LORE]);
};

seedUsers().catch(console.error);
