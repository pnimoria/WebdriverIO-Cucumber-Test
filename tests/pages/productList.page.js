const NativePage = require("./native.page.js");

class ProductList extends NativePage {
  get pageElements() {
    return this.getPage("page.locators");
  }

  async selectAndVerifyFilterOption(filterVal, filterKey) {
    await $(this.pageElements.filterValueByKey(filterKey, filterVal)).click();
    // Verify the selected filter is checked
    await expect(
      $(this.pageElements.getCheckedFilter(filterVal))
    ).toBeDisplayed();
  }

  async verifyPageResultsDisplayed() {
    await expect($(this.pageElements.searchResultPane)).toBeDisplayed();
  }

  async sortBy(sortType) {
    await new Promise((r) => setTimeout(r, 2000));
    if ($(this.pageElements.sortTypeSelected).getText() == sortType) {
      await expect($(this.pageElements.sortTypeSelected).getText()).toEqual(
        sortType
      );
    } else {
      await $(this.pageElements.sortByDrpDown).selectByVisibleText(sortType);
      //await $(this.pageElements.selectFromSortBy(sortType)).click();
    }
  }

  async selectProductByIndex(index) {
    const productTit = await $(
      this.pageElements.getProductTitleOnListPage(index)
    ).getText();
    await $(this.pageElements.selectProduct(index)).click();
    await expect(await $(this.pageElements.productTitle).getText()).toContain(
      productTit
    );
  }
}

module.exports = ProductList;
