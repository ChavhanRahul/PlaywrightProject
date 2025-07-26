// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


// git init
// git add .
// git commit -m "Updating the repository with latest changes"
// git push origin main
// git pull
// git pull origin main
// git config pull.rebase true


//const XLSX = require('xlsx');
//const workbook = XLSX.readFile('./path/to/your/excel/file.xlsx');


// try{
// }
// catch(e){
// console.log('Error in Sign In', e
// }


// const { chromium } = require('playwright');
// const fs = require('fs');
// (async () => {
//   // Launch browser
//   const browser = await chromium.launch({ headless: true });
//   const page = await browser.newPage();
//   // Navigate to the target page
//   await page.goto('https://practice.expandtesting.com/dynamic-pagination-table', { waitUntil: 'networkidle' });
//   // Set entries per page to 'All' to display all data on a single page
//   await page.selectOption('select[name="example_length"]', 'All');
//   // Wait for the table to load
//   await page.waitForSelector('#example tbody tr');
//   // Extract table data
//   const tableData = await page.$$eval('#example tbody tr', rows => {
//     return rows.map(row => {
//       const cells = Array.from(row.querySelectorAll('td'));
//       return {
//         studentName: cells[0]?.innerText.trim(),
//         gender: cells[1]?.innerText.trim(),
//         classLevel: cells[2]?.innerText.trim(),
//         homeState: cells[3]?.innerText.trim(),
//         major: cells[4]?.innerText.trim(),
//         extracurricularActivity: cells[5]?.innerText.trim(),
//       };
//     });
//   });
//   // Save data to a JSON file
//   fs.writeFileSync('tableData.json', JSON.stringify(tableData, null, 2));
//   console.log('Data extraction complete. Saved to tableData.json');
//   // Close browser
//   await browser.close();
// })();