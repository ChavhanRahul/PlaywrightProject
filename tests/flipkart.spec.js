const {test, result} = require('@playwright/test')
test.describe('Automate Flipkart Application', () => {

test('Order on Flipkart', async function({ page }) {
await page.goto('https://www.flipkart.com/', {waitUntil:'domcontentloaded'})
//await expect(page).toHaveURL(/flipkart/)
//await expect(page).toHaveTitle('flipkart')
await page.getByPlaceholder('Search for Products, Brands and More').fill('Motorola g85') 
await page.getByPlaceholder('Search for Products, Brands and More').press('Enter')
const page1Promise = page.waitForEvent('page')
await page.locator("//div[@class='col col-7-12']//div[normalize-space()='Motorola G85 5G (Olive Green, 128 GB)']").click()
const page1 = await page1Promise
await page1.getByRole('button', { name: 'Add to cart' }).click()
//New Page for the Search Product
await page.waitForLoadState('networkidle')
const pagePromise = context.waitForEvent('page')
await page.getByText('open new tab').click();
const newPage = await pagePromise
await newPage.locator("//div[@class='col col-7-12']//div[normalize-space()='Motorola G85 5G (Olive Green, 128 GB)']").click()
console.log(await newPage.title())



<<<<<<< HEAD
=======
})
>>>>>>> 945c086 (added/update dependencies for github playwright.yml)
})