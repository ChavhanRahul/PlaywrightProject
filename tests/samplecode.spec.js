// git init
// git add .
// git commit -m "Updating the repository with latest changes"
// git push origin main
// git pull
// git pull origin main
// git config pull.rebase true

//const fs = require('fs')
//const credentials = JSON.parse(fs.readFileSync('./credentials.json','utf-8'))
//const{username,password} = credentials

//const XLSX = require('xlsx');
//const workbook = XLSX.readFile('./path/to/your/excel/file.xlsx');

//const page1Promise = page.waitForEvent('page');
//await page.locator("//div[@class='col col-7-12']//div[normalize-space()='Motorola G85 5G (Olive Green, 128 GB)']").click()
//const page1 = await page1Promise;


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



// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.flipkart.com/');
//   await page.locator('._3n8fna1co._3n8fna10j._3n8fnaod._3n8fna1._3n8fnac7._1i2djtb9._9nihix1c').click();
//   await page.goto('https://www.flipkart.com/');
//   await page.getByRole('textbox', { name: 'Search for Products, Brands' }).dblclick();
//   await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('mot');
//   await page.getByRole('button', { name: '✕' }).dblclick();
//   await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
//   await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('moto');
//   await page.getByRole('link', { name: 'motorola g85 5g' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Bestseller Motorola G85 5G (Olive Green, 128 GB) Add to Compare Motorola G85 5G' }).click();
//   const page1 = await page1Promise;
//   await page1.getByRole('button', { name: 'Add to cart' }).click();
//   await page1.getByRole('button', { name: 'Add Item' }).click();
//   await page1.getByRole('button', { name: 'Place Order' }).click();
//   await page1.getByRole('textbox').click();
//   await page1.getByRole('textbox').click();
//   await page1.getByRole('textbox').fill('7768011404');
//   await page1.getByRole('button', { name: 'CONTINUE' }).click();
//   await page1.locator('div').filter({ hasText: /^Enter OTPResend\?$/ }).getByRole('textbox').click();
//   await page1.getByText('Delivery Address').click();
//   await page1.getByText('Delivery Address').click();
//   await page1.getByText('Delivery Address').click();
//   await page1.locator('div').filter({ hasText: /^Enter OTPResend\?$/ }).getByRole('textbox').click();
//   await page1.getByRole('link', { name: 'Resend?' }).click();
// });


// import { test, expect } from '@playwright/test';
// test('test', async ({ page }) => {
//   await page.goto('https://www.irctc.co.in/nget/train-search');
//   await page.getByRole('button', { name: 'Confirmation. Starting July 1' }).click();
//   await page.getByLabel('Enter From station. Input is').getByRole('searchbox').click();
//   await page.getByLabel('Enter From station. Input is').getByRole('searchbox').fill('ngp');
//   await page.getByLabel('Enter From station. Input is').getByRole('searchbox').press('Enter');
//   await page.getByLabel('Enter To station. Input is').getByRole('searchbox').click();
//   await page.getByLabel('Enter To station. Input is').getByRole('searchbox').fill('pune');
//   await page.getByLabel('Enter To station. Input is').getByRole('searchbox').press('Enter');
//   await page.locator('#journeyQuota').getByRole('button', { name: '' }).click();
//   await page.getByRole('option', { name: 'GENERAL' }).click();
//   await page.getByText('GENERAL', { exact: true }).click();
//   await page.getByRole('option', { name: 'LADIES' }).click();
//   await page.locator('#journeyQuota').getByRole('button', { name: '' }).click();
//   await page.getByRole('option', { name: 'GENERAL' }).click();
//   await page.getByRole('textbox').click();
//   await page.getByText('20', { exact: true }).click();
//   await page.getByRole('button', { name: 'Search' }).click();
//   await page.locator('.col-xs-12.link').first().click();
//   await page.locator('div').filter({ hasText: /^WL70$/ }).click();
//   await page.locator('span').filter({ hasText: 'Book Now CNF Probability ₹' }).getByRole('button').first().click();
//   await page.getByRole('button', { name: 'No', exact: true }).click();
//   await page.locator('div:nth-child(5) > .form-group > app-train-avl-enq > div > div:nth-child(5) > .white-back > table > tr > .ng-star-inserted > .pre-avl > .col-xs-12 > .fa').click();
//   await page.locator('div').filter({ hasText: /^AVAILABLE-0019$/ }).click();
//   await page.locator('span').filter({ hasText: 'Book Now ₹' }).getByRole('button').click();
//   await page.getByRole('button', { name: 'Yes' }).click();
//   await page.getByRole('textbox', { name: 'User Name' }).click();
//   await page.getByRole('textbox', { name: 'User Name' }).fill('anyrtyr');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('67567235764572362');
//   await page.getByRole('textbox', { name: 'Enter Captcha' }).click();
//   await page.getByRole('textbox', { name: 'Enter Captcha' }).fill('@bht9g');
//   await page.getByRole('button', { name: 'SIGN IN' }).click();
//   await page.locator('div').filter({ hasText: 'Error! Unable to Process' }).nth(3).click();
// });