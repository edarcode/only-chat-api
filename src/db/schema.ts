import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { ROLE } from "../constants/roles";

export const usersTable = sqliteTable("users", {
  id: text("id", { length: 36 }).primaryKey().default(crypto.randomUUID()),
  role: text("role", { enum: [ROLE.chief, ROLE.admin, ROLE.client] }).default(
    ROLE.client
  ),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  img: text("img"),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

export const contactsTable = sqliteTable("contacts", {
  id: text("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  tell: text("tell").notNull(),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
  userId: text("user_id", { length: 36 }).references(() => usersTable.id, {
    onDelete: "cascade",
  }),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertContacts = typeof contactsTable.$inferInsert;
export type SelectContacts = typeof contactsTable.$inferSelect;
