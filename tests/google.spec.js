const {test, expect} = require('@playwright/test')
test('Open Google' , async ({page}) => {
    await page.goto('https://www.google.com/')
    expect(page).toHaveTitle(/Google/)
})