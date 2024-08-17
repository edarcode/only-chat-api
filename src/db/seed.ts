import "../utils/dotenv";
import { BCRYPT } from "../constants/bcrypt";
import { db } from "./db";
import { followsTable, ROLE, usersTable } from "./schema";
import bcrypt from "bcrypt";

const TEST = {
  id: crypto.randomUUID(),
  username: process.env.CHIEF_USERNAME as string,
  email: process.env.CHIEF_EMAIL as string,
  password: process.env.CHIEF_PASSWORD as string,
  role: ROLE.chief,
};

const LORE = {
  id: crypto.randomUUID(),
  username: "lore",
  email: "lore@gmail.com",
  password: "123456",
  role: ROLE.client,
};

const seedUsers = async () => {
  TEST.password = await bcrypt.hash(TEST.password, BCRYPT.salt);
  LORE.password = await bcrypt.hash(LORE.password, BCRYPT.salt);

  await db.delete(usersTable).execute();
  await db.insert(usersTable).values([TEST, LORE]);

  await db
    .insert(followsTable)
    .values({ followerId: TEST.id, followingId: LORE.id });
};

seedUsers().catch(console.error);
