import { sql } from "drizzle-orm";
import { primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ROLE = {
  chief: "CHIEF",
  client: "CLIENT",
  admin: "ADMIN",
} as const;

export const usersTable = sqliteTable("users", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  role: text("role", { enum: [ROLE.chief, ROLE.admin, ROLE.client] }).default(
    ROLE.client
  ),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  img: text("img"),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
  updateAt: text("updated_at").$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

export const followsTable = sqliteTable(
  "follows",
  {
    followerId: text("follower_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    followingId: text("following_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    createdAt: text("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
  },
  (followsTable) => {
    return {
      id: primaryKey({
        columns: [followsTable.followerId, followsTable.followingId],
      }),
    };
  }
);

export const messagesTable = sqliteTable(
  "messages",
  {
    issuerId: text("issuer_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    receptorId: text("receptor_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    createdAt: text("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    text: text("text").notNull(),
  },
  (messagesTable) => {
    return {
      id: primaryKey({
        columns: [
          messagesTable.issuerId,
          messagesTable.receptorId,
          messagesTable.createdAt,
        ],
      }),
    };
  }
);

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertContacts = typeof followsTable.$inferInsert;
export type SelectContacts = typeof followsTable.$inferSelect;

export type InsertMessages = typeof messagesTable.$inferInsert;
export type SelectMessages = typeof messagesTable.$inferSelect;

export type Role = (typeof ROLE)[keyof typeof ROLE];
