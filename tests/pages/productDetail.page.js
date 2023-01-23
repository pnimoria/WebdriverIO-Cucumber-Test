const NativePage = require("./native.page.js");

class ProductDetailPage extends NativePage {
  get pageElements() {
    return this.getPage("page.locators");
  }

  async getAboutItem() {
    const aboutus = await $(this.pageElements.productAboutItem).getText();
    logger.info(aboutus);
  }
}

module.exports = ProductDetailPage;
