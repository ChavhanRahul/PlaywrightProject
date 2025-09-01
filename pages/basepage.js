
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async click(locator) {
    await locator.click();
  } 
  async fill(locator, text) {
    await locator.fill(text);
  }

  async getText(locator) {
    return await locator.textContent();
  }

  async isVisible(locator) {
    return await locator.isVisible();
  }

  async waitForTimeout(ms) {
    await this.page.waitForTimeout(ms);
  }
}
module.exports = { BasePage };