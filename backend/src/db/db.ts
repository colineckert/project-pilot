import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Create a connection pool to the PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export default db;
