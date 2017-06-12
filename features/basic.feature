Feature: Basic test

  Scenario: Basic test 1
    Given I am on "home" page
    When I open login page
    Then Login page should be displayed
    When I enter credentials
    Then Home page should be displayed


    Scenario: Basic test 2
    Given I am on "home" page
    When I open join me page
      And I submit join form
    Then Home page should be displayed
    When I perform a search of "bird" with "Photos" filter
      Then I should see a collection of images