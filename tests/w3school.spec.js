const {test, expect}= require('@playwright/test')
const fs = require('fs')

const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'))
const {username, password} = credentials

test.describe('Automation with W3School',() => {


test('Launch on W3School' , async function({page}){
    await page.goto('https://www.w3schools.com/', {waitUntil: 'domcontentloaded'})

//Sign In to W3School
    await page.locator("//span[normalize-space()='Sign In'][1]").click()
    await page.getByPlaceholder('Email').fill(username)
    await page.getByPlaceholder('Password').fill(password)
    await page.locator("//button[@type='submit']//span[@class='button-text'][normalize-space()='Sign In']").click()
    // expect.soft(Page).toHaveText('Invalid username or password')


            
// //Sign Up to W3School
//     await page.locator("//a[normalize-space()='Register']").click()
//     await page.locator("//input[@id='tnb-signup-email']").fill('rahulbjobs@gmail.com')  
//     await page.getByPlaceholder('First Name').fill('Rahul')
//     await page.getByPlaceholder('Last Name').fill('Chavhan')
//     await page.locator("//input[@id='tnb-signup-password']").fill('Best@2025')
//     //await page.locator("//label[normalize-space()='Email me with news and updates']").check()
//     await page.locator("//span[normalize-space()='Create account']").click()



})


})
    