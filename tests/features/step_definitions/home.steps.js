const { Given, When, Then, And } = require("@cucumber/cucumber");
const common = require("../../pages/common.page.js");
const commonPage = new common();

Given(/^I open amazon$/, async () => {
  await commonPage.openPage();
});

When(
  /^I click on Hamburger menu and select (.*) and (.*)$/,
  async (department, category) => {
    await commonPage.selectFromHamburger(department, category);
  }
);
