const {PracticePage} = require('../pages/practicepage')
const {test, expect} = require('@playwright/test')
const {dotenv} = require('../utils/env')


test.describe('Automate Practice Application', () => {
    test('POM structure Testing', async ({page})=> {
        const practicepage = new PracticePage(page);

        await practicepage.goto();
        await practicepage.login('practice', 'SuperSecretPassword!');
        // await practicepage.login(process.env.USERNAME, process.env.PASSWORD)
        // console.log('Loaded ENV:', process.env.USERNAME, process.env.PASSWORD);
        const message = await practicepage.getFlashMessage()
        expect(message).toContain('You logged into a secure area!')
    })
})