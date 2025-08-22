const { test, expect } = require('@playwright/test');

test('Validate API Response', async ({ request }) => {
  // Use Playwright's request fixture
  const response = await request.post('https://www.w3school.com', {
    data: {
      username: 'Rahul',
      password: 'Secret'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.token).toBeDefined();
});