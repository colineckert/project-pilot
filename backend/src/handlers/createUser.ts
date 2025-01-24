import db from "@/db/db";
import { users } from "@/db/schema";

export const handler = async (event: any) => {
  try {
    const { clerkId, email, name } = JSON.parse(event.body);
    const user = await db
      .insert(users)
      .values({ clerkId, email, name })
      .returning();
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create user" }),
    };
  }
};
