const { When, Then } = require("@cucumber/cucumber");

const productList = require("../../pages/productList.page");
const productListPage = new productList();

When(
  /^I select the filter option as (.*) for (.*)$/,
  async (filterValue, filterKey) => {
    await productListPage.selectAndVerifyFilterOption(filterValue, filterKey);
  }
);

Then(/^I verify the results are displayed$/, async () => {
  await productListPage.verifyPageResultsDisplayed();
});

When(/^I sort by (.*)$/, async (sortType) => {
  await productListPage.sortBy(sortType);
});
