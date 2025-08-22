const {test, expect} = require('@playwright/test')
const { promises } = require('dns')
test.describe('Automate Practice Application', () => {


test('Login to Practice Application', async function ({page}) {
    await page.goto('https://practice.expandtesting.com/', {waitUntil: 'domcontentloaded'})   
    //Verify the Title 
    expect.soft(page).toHaveTitle('Practice')
    //Verify the URL
    expect(page).toHaveURL(/practice/)
    //Select Demos option from the Menu
    await page.locator("//a[@id='examples-dropdown']").selectOption('Examples')
    //Scroll the page up to select Test Login Page link
    await page.mouse.down()
    //Login Page and open in same tab
    await page.locator("//a[normalize-space()='Test Login Page']").click()
    //Find Login Page and open in new tab
    //await page.locator("//a[normalize-space()='Test Login Page']").click({modifiers: ['Control']})
    await page.locator("//label[normalize-space()='Username']").fill('practice')
    await page.locator("//input[@id='password']").fill('SuperSecretPassword!')  
    await page.locator("//button[@type='submit']").click()
    expect(page).toHaveTitle("You logged into a secure area!")
}) 

test('Verify OTP and Login', async function ({page}){
    await page.locator("//a[normalize-space()='OTP: One Time Password']").click()
    expect(page).toHaveURL(/otp-login/)
    await page.locator("//input[@id='email']").fill('practice@expandtesting.com')
    await page.locator("//button[@type='submit']").click()
    expect(page).toHaveTitle('OTP Verification')
    await page.locator("//input[@id='otp']").fill('214365')
    await page.locator("//button[@id='btn-send-verify']").click()
    await page.locator("//i[normalize-space()='Logout']").click()
    await browser.close()
})

test('Handel Drop Down', async function ({page}) {
    await page.goto('https://practice.expandtesting.com/dropdown')
    // //Simple Drop down
    // await page.locator("//select[@id='dropdown']").click()
    // await page.locator("//select[@id='dropdown']").selectOption('Option 1')
    //Select Country from the dropdown
    await page.locator("//select[@id='country']").click()
    //await page.locator("//select[@id='country']").selectOption( {value: 'IN'})
    await page.locator("//select[@id='country']").selectOption( {label: 'India'})
    
})


})


test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');
  await page.getByLabel('Show 3510All entries').selectOption('10');
  await page.getByRole('button', { name: 'Close shopping anchor' }).selectOption('10');
  await page.getByRole('button', { name: 'Close shopping anchor' }).click();
  await page.locator('#example_next').click();
});