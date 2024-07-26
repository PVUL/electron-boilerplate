import path from "path";
import { existsSync, mkdirSync } from "fs";
import Database from "better-sqlite3";
import {
  drizzle,
  type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";

const isDev = process.env.NODE_ENV === "development";
const dbDirectory = path.resolve("./database");
export const dbPath = isDev
  ? path.join(dbDirectory, "app.db")
  : path.resolve(process.resourcesPath, "app.db");

if (isDev && !existsSync(dbDirectory)) {
  mkdirSync(dbDirectory, { recursive: true });
}

// eslint-disable-next-line no-console -- for debug
export const betterSqlite3 = new Database(dbPath, { verbose: console.log });

// パフォーマンス向上のためWALモードを有効にする
// ref: https://github.com/WiseLibs/better-sqlite3/blob/master/docs/performance.md
betterSqlite3.pragma("journal_mode = WAL");

export const db: BetterSQLite3Database = drizzle(betterSqlite3);
