"use server";

import { db } from "@/server/db";
import { libraries } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function GetMock() {
  const mockUserID = BigInt(198198190818190);
  const result = await db
    .select()
    .from(libraries)
    .where(eq(libraries.creatorId, mockUserID));

  if (!result) throw new Error("Failed to fetch libraries");
  return result as (typeof libraries.$inferSelect)[];
}
