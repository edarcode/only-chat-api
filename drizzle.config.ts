import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: "file:./src/db/onlychat.db",
    //authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
