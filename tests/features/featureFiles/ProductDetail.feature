Feature: Search and select a product from a category on Amazon.com

  #Using cucumber examples as the test case can be extended for various scenarios
  Scenario Outline: Search and verify product info on the search results page

    Given I open amazon
    When I click on Hamburger menu and select <department> and <category>
    And I select the filter option as <filterValue> for <filterKey>
    Then I verify the results are displayed
    When I sort by <sortType>
    Then I verify the <index> result and assert About the Item

    Examples:
      | department  | category   | filterKey     | filterValue               | sortType           | index |
      | Electronics | Headphones | Noise Control | Active Noise Cancellation | Price: High to Low | 2     |