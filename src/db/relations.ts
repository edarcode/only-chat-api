import { relations } from "drizzle-orm/relations";
import { users, follows, messages } from "./schema";

export const followsRelations = relations(follows, ({ one }) => ({
  user_followingId: one(users, {
    fields: [follows.followingId],
    references: [users.id],
    relationName: "follows_followingId_users_id",
  }),
  user_followerId: one(users, {
    fields: [follows.followerId],
    references: [users.id],
    relationName: "follows_followerId_users_id",
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  follows_followingId: many(follows, {
    relationName: "follows_followingId_users_id",
  }),
  follows_followerId: many(follows, {
    relationName: "follows_followerId_users_id",
  }),
  messages_receptorId: many(messages, {
    relationName: "messages_receptorId_users_id",
  }),
  messages_issuerId: many(messages, {
    relationName: "messages_issuerId_users_id",
  }),
}));

export const messagesRelations = relations(messages, ({ one }) => ({
  user_receptorId: one(users, {
    fields: [messages.receptorId],
    references: [users.id],
    relationName: "messages_receptorId_users_id",
  }),
  user_issuerId: one(users, {
    fields: [messages.issuerId],
    references: [users.id],
    relationName: "messages_issuerId_users_id",
  }),
}));
