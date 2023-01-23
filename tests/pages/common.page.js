const NativePage = require("./native.page.js");
const configData = require("../files/config/appProperties.data.js");

class CommonPage extends NativePage {
  get pageElements() {
    return this.getPage("page.locators");
  }

  async openPage() {
    await browser.maximizeWindow();
    //Get the app url from config file
    await browser.url(configData["baseUrl"]);
  }

  async selectFromHamburger(department, category) {
    await $(this.pageElements.hamburgerIcon).click();
    await $(this.pageElements.hmenuDepartment(department)).click();
    await $(this.pageElements.hmenuCategory(category)).click();

    //Verify the category page is loaded
    await expect(
      $(this.pageElements.searchDropdownText(category))
    ).toBePresent();
  }
}

module.exports = CommonPage;
