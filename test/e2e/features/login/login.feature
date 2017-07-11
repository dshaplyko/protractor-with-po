Feature: Login Feature

  Scenario: Logging in to the application
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed

  Scenario: Logging out from the application
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed
    When I logout
    Then Profile menu should not be displayed
