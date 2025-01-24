import { pgTable, serial, varchar, integer, date } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: varchar("clerk_id").notNull().unique(),
  email: varchar("email").notNull(),
  name: varchar("name").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  description: varchar("description").notNull(),
  userId: integer("user_id").notNull(),
});

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  description: varchar("description").notNull(),
  projectId: integer("project_id").notNull(),
  startDate: date("start_date"),
  dueDate: date("due_date"),
  priority: integer("priority").notNull().default(1), // = 1: low, 2: medium, 3: high
});
