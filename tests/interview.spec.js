// const {test, expect, chromium} = require('@playwright/test')
// test.describe('Automation Interview at "UBS"', () => {
//     test('Login to UBS', async ({page}) => {
//         await page.goto('https://onlineservices.ubs.com/cauth/wma/signin#/')
//         //Verify the Title
//         expect(page).toHaveTitle('UBS Online Services')
//     })

// })
// const {chromium} = require('playwright');
// (async() => {
//     const browser = await chromium.launch({headless: false})
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto('https://www.w3schools.com/')
//     //expect(page).toHaveTitle('W3Schools Online Web Tutorials')
//     //await page.getByTestId('tnb-login-btn').click()
//     await page.locator("//span[normalize-space()='Sign In'][1]").click()
//     await page.getByPlaceholder('Email').fill('rahulbjobs@yahoo.com')
//     await page.getByPlaceholder('Password').fill('Best@2025')
//     await page.locator("//button[@type='submit']//span[@class='button-text'][normalize-space()='Sign In']").click()
//     await page.waitForLoadState()
//     // Save storage state (cookies, localStorage)
//     await context.storageState({path: 'storageState.json'})
//     console.log('Login Successfull with different credentials')
//     await browser.close()

// })()

const {chromium} = require('playwright');
(async() => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext({storageState: 'storageState.json'})
    const page = await context.newPage()
    await page.goto('https://www.w3schools.com/')
    console.log('Login with saved credentials')
    await browser.close()
})()

