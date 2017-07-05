Feature: Home Feature

  Scenario: Opening a library
    Given I am on "login" page
    When I enter credentials
      And I click My Library link
    Then I should see a collection of results

  Scenario: Opening a book
    Given I am on "home" page
    When I open a book
    Then Document page should be displayed

  Scenario: Invoking a highlighting popup
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed
    When I open a book
      And I double click on title
      And I highlight title
      And I wait for 5 seconds