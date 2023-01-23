const { When, Then } = require("@cucumber/cucumber");

const productDetail = require("../../pages/productDetail.page");
const productList = require("../../pages/productList.page");
const productListPage = new productList();
const productDetailPage = new productDetail();

Then(/^I verify the (.*) result and assert About the Item$/, async (index) => {
  await productListPage.selectProductByIndex(index);
  await productDetailPage.getAboutItem();
});
