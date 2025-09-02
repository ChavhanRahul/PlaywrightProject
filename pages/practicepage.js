const practiceLocators = require('../locators/practice.locators');

class PracticePage{
    constructor(page){
        this.page = page;
        this.demosfield  = page.locator(practiceLocators.demosfield);
        this.examplefield = page.locator(practiceLocators.examplefield);
        this.testloginpagefield = page.locator(practiceLocators.testloginpagefield);
        this.usernamefield = page.locator(practiceLocators.usernamefield);
        this.passwordfield = page.locator(practiceLocators.passwordfield);
        this.loginbuttonfield = page.locator(practiceLocators.loginbuttonfield)
    }
  async goto(){
    await this.page.goto('https://practice.expandtesting.com/')
  }
  async login(username, password){
    await  this.demosfield.click();
    await  this.examplefield.click();
    await  this.testloginpagefield.click();
    await  this.usernamefield.fill(username);
    await  this.passwordfield.fill(password);
    await  this.loginbuttonfield.click();
  }
}
  module.exports = { PracticePage };


 

    