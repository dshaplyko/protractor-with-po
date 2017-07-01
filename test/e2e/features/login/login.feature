Feature: Login Feature

  Scenario: Logging in to the application
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed
    When I scroll to the bottom
      And I wait for 5 seconds
      And I scroll to the top
      And I wait for 5 seconds

  Scenario: Logging out from the application
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed
    When I logout
    Then Profile menu should not be displayed
