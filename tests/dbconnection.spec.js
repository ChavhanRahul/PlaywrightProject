const { test, expect } = require('@playwright/test');
const { connectDatabase, disconnectDatabase, runQuery } = require('../db');

test.describe('Verify PostgreSQL Connection Setup', () => {
  test.beforeAll(async () => {
    await connectDatabase();
  });

  test.afterAll(async () => {
    await disconnectDatabase();
  });
   test('should successfully execute SELECT 1', async () => {
    const result = await runQuery('SELECT 1 AS result');
    console.log('DB Query Result:', result);  // ✅ Explicit output

    expect(result).toBeDefined();
    expect(result[0].result).toBe(1);          // ✅ Assertion
  });
})