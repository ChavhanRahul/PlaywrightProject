// const { test, expect } = require('@playwright/test');

// test('Validate API Response', async ({ request }) => {
//   // Use Playwright's request fixture
//   const response = await request.post('https://www.w3school.com', {
//     data: {
//       username: 'Rahul',
//       password: 'Secret'
//     }
//   });

//   expect(response.status()).toBe(201);

//   const body = await response.json();
//   expect(body.token).toBeDefined();
// });



   import { test, expect } from '@playwright/test';

test('POST /api/student - create new student', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/', {
    data: {
      name: "Rahul",
      age: 25,
      course: "Computer Science"
 }
  });

  // Verify status code
  expect(response.status()).toBe(201);

  // Verify response body
  const body = await response.json();
  expect(body.message).toBe("Student created successfully");
  expect(body.student.name).toBe("Rahul");
  expect(body.student.age).toBe(25);
  expect(body.student.course).toBe("Computer Science");
});
