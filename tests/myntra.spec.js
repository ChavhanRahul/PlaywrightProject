const {test, result} = require('@playwright/test')
test('Placing order on Myntra',async function({page}){
await page.goto('https://www.myntra.com', {waitUntil:'domcontentloaded'})
expect(page).toHaveURL(/myntra.com/)
}
)