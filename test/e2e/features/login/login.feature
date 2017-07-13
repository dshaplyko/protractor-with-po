Feature: Login Feature

Scenario: Checking elements on login page
  Given I am on "login" page
  Then Login dialog should be displayed 

  Scenario: Logging in to the application
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed

  Scenario: Logging out from the application
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed
    When I logout
    Then Login button should be displayed
