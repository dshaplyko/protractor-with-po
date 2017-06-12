Feature: Basic test

  Scenario: Basic test 1
    Given I am on "join" page
    When I submit join form
    Then Home page should be displayed
      And I perform a search of "image"
    Then I should see a collection of images


    Scenario: Basic test 2
    Given I am on "home" page
    When I open join me page
      And I submit join form
    Then Home page should be displayed
    When I perform a search of "bird" with "Photos" filter
      Then I should see a collection of images