const {test, expect } = require('@playwright/test')
test.describe('Automate IRCTC Application', () => {


test('Login into IRCTC' , async function({page}){
await page.goto('https://www.irctc.co.in/nget/train-search', {waitUntil:'domcontentloaded'})
//Accept the Alert
await page.locator("//button[normalize-space()='Confirmation. Starting July 1']").click()
//await page.locator("//span[normalize-space()='Alert']")
//await page.locator("//button[normalize-space()='OK']").click()
//Verify the correct URL
//expect(page).toHaveURL(/train-search/)
await page.locator("//div[@class='h_menu_drop_button hidden-xs']").click()
await page.locator("//label[@class='ng-star-inserted']").click()
await page.getByPlaceholder('User Name').click()
await page.getByPlaceholder('User Name').fill('enterusername')
await page.getByPlaceholder('Password').click()
await page.getByPlaceholder('Password').fill('enterpassword')
await page.getByPlaceholder('Enter Captcha').click()
await page.getByPlaceholder('Enter Captcha').fill('entercaptcha')
await page.locator("//label[normalize-space()='Login & Booking With OTP']").check()
await page.locator("//button[normalize-space()='SIGN IN']").click()

})

test('Booking page', async function({page}){
//Enter From Station
await page.getByLabel('Enter From station. Input is Mandatory.').getByRole('searchbox').click()
await page.getByLabel('Enter From station. Input is Mandatory.').getByRole('searchbox').fill('ngp')
await page.getByLabel('Enter From station. Input is Mandatory.').getByRole('searchbox').press('Enter')
//await page.locator("//input[@class='ng-tns-c58-8 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted']").fill('NGP').press('Enter')

//Enter To Station
await page.getByLabel('Enter To station. Input is Mandatory.').getByRole('searchbox').click()
await page.getByLabel('Enter To station. Input is Mandatory.').getByRole('searchbox').fill('Pune')
await page.getByLabel('Enter To station. Input is Mandatory.').getByRole('searchbox').press('Enter')
})

})

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