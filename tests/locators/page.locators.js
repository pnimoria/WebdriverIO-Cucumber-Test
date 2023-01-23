class pageLocators {
  constructor() {
    // Home Page Locators
    this.hamburgerIcon = '[id="nav-hamburger-menu"]';

    // Product List Locators
    this.searchResultPane = '[data-component-type="s-search-results"]';
    this.sortByDrpDown = '[id="s-result-sort-select"]';
    this.sortTypeSelected = '//span[@class="a-dropdown-prompt"]';

    // Product Page Locators
    this.productTitle = '[id="productTitle"]';
    this.productAboutItem =
      '//h1[text()=" About this item "]/following-sibling::ul';
  }

  //Parameterized locators
  hmenuDepartment(departmentName) {
    return `//*[@class="hmenu-item"]/div[text()='${departmentName}']`;
  }

  hmenuCategory(categoryName) {
    return `//*[@class='hmenu-item' and text()='${categoryName}']`;
  }

  filterValueByKey(filterKey, filterValue) {
    return `//span[text()='${filterKey}' and contains(@class,'bold-weight-text')]/../following-sibling::ul/li[@aria-label='${filterValue}']`;
  }

  searchDropdownText(categoryText) {
    return `//*[@id='searchDropdownBox']/option[contains(text(),'${categoryText}') and @selected='selected']`;
  }

  getCheckedFilter(filterValue) {
    return `//*[text()='${filterValue}']/preceding-sibling::div//input[@checked]`;
  }

  selectFromSortBy(sortValue) {
    return `(//a[@class='a-dropdown-link' and text()='${sortValue}')[2]`;
  }

  selectProduct(index) {
    return `(//*[@data-component-type="s-search-result"])[${index}]`;
  }

  getProductTitleOnListPage(index) {
    return `(//*[@data-component-type="s-search-result"]//h2//span)[${index}]`;
  }
}

module.exports = pageLocators;
