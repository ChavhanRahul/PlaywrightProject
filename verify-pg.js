const db = require('./db');

async function run() {
  const res = await db.query('SELECT NOW()');
  console.log('Current Time:', res.rows[0]);
}

run();