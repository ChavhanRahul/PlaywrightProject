const {test, expect} = require('@playwright/test')
const { promises } = require('dns')
// const locators = require('../locators/practice.locators')
const { PracticePage } = require('../pages/practicepage')

test.describe('Automate Practice Application', () => {
    test('POM structure Testing', async ({page})=> {
        const practicepage = new PracticePage(page);

        await practicepage.goto();
        await practicepage.login('practice', 'SuperSecretPassword!');
    })
})