
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open SQLite database connection
export async function openDB() {
  return open({
    filename: './mydb.db',
    driver: sqlite3.Database
  });
}




async function setup() {
    const db = await openDB();
    await db.exec('CREATE TABLE IF NOT EXISTS genders (id INTEGER PRIMARY KEY, name TEXT)');
  }
  setup();
  