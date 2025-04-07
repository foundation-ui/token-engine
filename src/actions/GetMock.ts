"use server";

import { db } from "@/server/db";
import { libraries } from "@/server/db/schema";

export async function GetMock() {
  const result = await db.select().from(libraries);

  if (!result) throw new Error("Failed to fetch libraries");
  return result as (typeof libraries.$inferSelect)[];
}
