import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Define types for custom fixtures
type MyFixtures = {
  loginPage: LoginPage;
};

// Extend the base test with custom fixtures
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';