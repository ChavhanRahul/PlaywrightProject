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

