const {test, result} = require('@playwright/test')
test('Order on Flipkart',async function({page}){
// await page.goto('https://www.flipkart.com/', {waitUntil:'domcontentloaded'})
// //await expect(page).toHaveURL(/flipkart/)
// //await expect(page).toHaveTitle('flipkart')
// await page.getByPlaceholder('Search for Products, Brands and More').fill('Motorola g85') 
// await page.getByPlaceholder('Search for Products, Brands and More').press('Enter')
// const page1Promise = page.waitForEvent('page')
// await page.locator("//div[@class='col col-7-12']//div[normalize-space()='Motorola G85 5G (Olive Green, 128 GB)']").click()
// const page1 = await page1Promise
// await page1.getByRole('button', { name: 'Add to cart' }).click()
// //New Page for the Search Product
// await page.waitForLoadState('networkidle')
// const pagePromise = context.waitForEvent('page')
// await page.getByText('open new tab').click();
// const newPage = await pagePromise
// await newPage.locator("//div[@class='col col-7-12']//div[normalize-space()='Motorola G85 5G (Olive Green, 128 GB)']").click()
// console.log(await newPage.title())

// const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Motorola G85 5G (Olive Green, 128 GB) Add to Compare Motorola G85 5G (Olive' }).click();
//   const page1 = await page1Promise;



//await page.locator("//div[@aria-label='Electronics']//div//div[@class='YBLJE4']").click()
//await browser.close()


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('mo');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('moto');
  await page.getByRole('link', { name: 'moto g85 5g' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator("//div[@class='col col-7-12']//div[normalize-space()='Motorola G85 5G (Olive Green, 128 GB)']").click()
  //await page.getByRole('link', { name: 'Motorola G85 5G (Olive Green, 128 GB) Add to Compare Motorola G85 5G (Olive' }).click();
  const page1 = await page1Promise;
  await page1.locator("//button[normalize-space()='Add to cart']").click()
  //await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.locator("//button[normalize-space()='Add Item']").click()
  //await page1.locator("//button[normalize-space()='Place Order']").click()
  //const popupPromise = page1.waitForEvent('popup')
  await page1.locator("//button[normalize-space()='Place Order']").click()
  //const popup = await popupPromise 
  await popup.getByPlaceholder('Enter Email/Mobile number').fill('7768011404')
  //await page1.getByRole('button', { name: 'Place Order' }).click();
// });

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

}
)