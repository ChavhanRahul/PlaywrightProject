const practicelocators = require('../locators/practice.locators');

class PracticePage{
    constructor(page){
        this.page = page;
        this.demosfield  = page.locator(practicelocators.demosfield);
        this.examplefield = page.locator(practicelocators.examplefield);
        this.testloginpagefield = page.locator(practicelocators.testloginpagefield);
        this.usernamefield = page.locator(practicelocators.usernamefield);
        this.passwordfield = page.locator(practicelocators.passwordfield);
        this.loginbuttonfield = page.locator(practicelocators.loginbuttonfield)
        this.flashMessage = page.locator(practicelocators.flashMessage)
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
  
   async getFlashMessage() {
    return await this.flashMessage.textContent();
    
  }
}
  module.exports = { PracticePage };


 

    