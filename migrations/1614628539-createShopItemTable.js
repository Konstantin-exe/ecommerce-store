exports.up = async (sql) => {
  await sql`
  CREATE TABLE shop_items (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      item_name VARCHAR (100),
      price INT,
      quantity INT,
      img_url VARCHAR (100),
      short_description TEXT,
      long_description TEXT
    )
  `;
};

exports.down = async (sql) => {
  await sql`
  DROP TABLE shop_items
  `;
};
