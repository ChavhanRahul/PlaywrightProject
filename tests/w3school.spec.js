const {test, expect} = require('@playwright/test')

const fs = require('fs')

const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'))
const {username2, password2} = credentials

test.describe('Automation with W3School', () => {

test('Sign In/Register to W3School' , async function({page}){
    await page.goto('https://www.w3schools.com/', {waitUntil: 'domcontentloaded'})
    await page.locator("//span[normalize-space()='Sign In'][1]").click()
    // await page.getByPlaceholder('Email').fill(username2, {delay: 200})
    // await page.getByPlaceholder('Password').fill(password2, { delay: 200})
    
    await page.getByPlaceholder('Email').type(username2, { delay: 200 });
    await page.getByPlaceholder('Password').type(password2, { delay: 200 });
    
    await page.locator("//button[@type='submit']//span[@class='button-text'][normalize-space()='Sign In']").click()
    const loginerror = await page.getByText('In-valid username or password', {exact: true})
    if(await loginerror.isVisible()) {
        console.log('Log in failed, first register yourself')
    }
    else {
        console.log('Register yourself')
    await page.locator("//a[normalize-space()='Register']").click()
    await page.locator("//input[@id='tnb-signup-email']").fill(username2)  
    await page.getByPlaceholder('First Name').fill('Rahul')
    await page.getByPlaceholder('Last Name').fill('Chavhan')
    await page.locator("//input[@id='tnb-signup-password']").fill(password2)
    //await page.locator("//label[normalize-space()='Email me with news and updates']").check()
    await page.locator("//span[normalize-space()='Create account']").click()
     }        
})


})
 