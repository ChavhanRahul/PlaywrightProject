const dashboardLocators = require('../locators/dashboardpage.locators');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.secureHeader = page.locator(dashboardLocators.secureHeader);
  }

  async getHeaderText() {
    return await this.secureHeader.textContent();
  }
}

module.exports = { DashboardPage };