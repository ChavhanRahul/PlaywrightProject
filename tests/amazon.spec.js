const {test, expect} = require('@playwright/test')
test('Checkout on Amazon', async function ({page}){
    await page.goto('https://www.amazon.in', {waitUntil:'domcontentloaded'})
    //Verify the correct URL
    //expect(page).toHaveURL('/amazon.in/')
    //expect(page).toHaveTitle('Amazon')
    // //Login to Amazon
    // await page.locator("//span[normalize-space()='Account & Lists']").click()
    // //Verify the Sign In Page
    // expect(page).toHaveURL(/signin/)
    // //Enter Email or Mobile Number
    // await page.locator("//input[@id='ap_email_login']").fill('')
    // await page.locator("//input[@class='a-button-input']").click()
    // await page.locator("//input[@id='ap_password']").fill('')
    // await page.locator("//input[@id='signInSubmit']").click()

    //Search for product
    await page.locator("//input[@id='twotabsearchtextbox']").fill('Mobile phone under 20000')
    await page.locator("//input[@id='twotabsearchtextbox']").press('Enter')
    expect(page).toHaveTitle('Result')

}
)