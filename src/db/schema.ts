import { sql } from "drizzle-orm";
import { primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ROLE = {
  chief: "CHIEF",
  client: "CLIENT",
  admin: "ADMIN",
} as const;

export const users = sqliteTable("users", {
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

export const follows = sqliteTable(
  "follows",
  {
    followerId: text("follower_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    followingId: text("following_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
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

export const messages = sqliteTable(
  "messages",
  {
    issuerId: text("issuer_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    receptorId: text("receptor_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
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

export type InsertUsers = typeof users.$inferInsert;
export type SelectUsers = typeof users.$inferSelect;

export type InsertFollows = typeof follows.$inferInsert;
export type SelectFollows = typeof follows.$inferSelect;

export type InsertMessages = typeof messages.$inferInsert;
export type SelectMessages = typeof messages.$inferSelect;

export type Role = (typeof ROLE)[keyof typeof ROLE];
