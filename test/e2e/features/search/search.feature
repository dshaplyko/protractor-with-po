Feature: Search Feature

  Scenario: Performing a search
    Given I am on "home" page
    When I perform a search of "cerca"
    Then I should see a collection of results

    # Scenario: Basic test 2
    # Given I am on "home" page
    # When I open join me page
    #   And I submit join form
    # Then Home page should be displayed
    # When I perform a search of "bird" with "Photos" filter
    #   Then I should see a collection of images
