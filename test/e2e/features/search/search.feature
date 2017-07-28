@desktop
Feature: Search Feature

  Scenario: Performing a search
    Given I am on "home" page
    When I perform a search of "cerca"
    Then I should see a collection of results

  Scenario Outline: Performing a search with filters
      Given I am on "home" page
      When I perform a search of <term> with <option> filter
      Then I should see a collection of results
  
  Examples:
  |term     |option  |
  |"codice" |"Testo" |
  |"diritto"|"Titolo"|
