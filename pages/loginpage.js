const loginLocators = require('../locators/loginpage.locators');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator(loginLocators.usernameField);
    this.passwordField = page.locator(loginLocators.passwordField);
    this.loginButton = page.locator(loginLocators.loginButton);
    this.flashMessage = page.locator(loginLocators.flashMessage);
  }
   async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
   // await this.page.goto(process.env.BASE_URL + '/login');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async getFlashMessage() {
    return await this.flashMessage.textContent();
  }
}
module.exports = { LoginPage };