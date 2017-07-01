Feature: Search Feature

  Scenario: Performing a search
    Given I am on "home" page
    When I perform a search of "cerca"
    Then I should see a collection of results

  Scenario: Performing a search with filters
      Given I am on "home" page
      When I perform a search of "codice" with "Titolo" filter
      Then I should see a collection of results
