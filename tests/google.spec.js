const {test, expect} = require('@playwright/test')
test('Open Google' ,async function ({page}){
    await page.goto('https://www.google.com/')
})