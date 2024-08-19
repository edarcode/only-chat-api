import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";
import * as relations from "./relations";

const client = createClient({
  url: "file:./src/db/onlychat.db",
  // url: process.env.TURSO_CONNECTION_URL!,
  // authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema: { ...schema, ...relations } });
