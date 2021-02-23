import postgres from 'postgres';
import camelcaseKeys from 'camelcase-keys';
require('dotenv-safe').config();

const sql = postgres();

export async function getItemInfo() {
  const items = await sql`SELECT * FROM shop_items`;
  return camelcaseKeys(items);
}

export async function getItemById(id) {
  const matchingItem = camelcaseKeys(
    await sql`SELECT * FROM shop_items WHERE id = ${id}`,
  );
  return matchingItem;
}
