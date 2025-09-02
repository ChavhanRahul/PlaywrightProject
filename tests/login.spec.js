const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { DashboardPage } = require('../pages/dashboardpage');
const dotenv  = require('dotenv');
dotenv.config({ path: `.env.${process.env.ENV || 'qa'}` });
//require('dotenv').config({ path: '.env.' + process.env.qa});

test.describe('Login Tests', () => {
  
  test('Valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    //await loginPage.login(process.env.USERNAME, process.env.PASSWORD);

    const message = await loginPage.getFlashMessage();
    expect(message).toContain('You logged into a secure area!');

    const header = await dashboardPage.getHeaderText();
    expect(header).toBe(' Secure Area');
  });
   test('Invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrongUser', 'wrongPass');

    const message = await loginPage.getFlashMessage();
    expect(message).toContain('Your username is invalid!');
  });

});