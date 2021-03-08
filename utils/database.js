import postgres from 'postgres';
import camelcaseKeys from 'camelcase-keys';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();
require('dotenv-safe').config();

function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    sql = postgres({ ssl: true });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}
const sql = connectOneTimeToDatabase();

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
