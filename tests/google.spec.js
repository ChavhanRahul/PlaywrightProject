const {test, expect} = require('@playwright/test')
const fs = require ('fs')

// import fs from 'fs';

// const dir = 'C:\\Users\\Pragati\\PlaywrightProject\\test-results\\screenshots';

// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir, { recursive: true });
// }

// await page.screenshot({
//   path: `${dir}\\playwright.png`,
//   fullPage: true
// });


test('Open Google' , async ({page}) => {
    await page.goto('https://www.google.com/');
    expect(page).toHaveTitle(/Google/);
    await page.locator('//textarea[@id="APjFqb"]').fill('Playwright');
    await page.locator('//textarea[@id="APjFqb"]').press('Enter');
    await page.locator('//span[normalize-space()="Playwright"]).click();')
    expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
    await page.screenshot({path: 'playwright.png', fullPage: true});
    await page.locator('//a[normalize-space()="Docs"]').click();
    await page.locator('//a[normalize-space()="Installation"]').click();
    
    
    // //await expect(page.getByText("Welcome")).toBeVisible()
})