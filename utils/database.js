import postgres from 'postgres';
import { createRequire } from 'module';
import camelcaseKeys from 'camelcase-keys';

const sql = postgres();

// await sql`SELECT * FROM shop_items`;

export async function getItemInfo() {
  const items = camelcaseKeys(await sql`SELECT * FROM shop_items`);
  console.log(items);

  return items;
}

async function getItemById(id) {
  return await sql`SELECT * FROM shop_items WHERE id = ${id}`;
}
