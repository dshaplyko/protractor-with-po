Feature: La Mia Biblioteca Test Suite

  Scenario: Logging in to the application
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed
    When I scroll to the bottom
      And I wait for 5 seconds
      And I scroll to the top
      And I wait for 5 seconds

  Scenario: Invoking a highlighting popup
    Given I am on "login" page
    When I enter credentials
    Then Profile menu should be displayed
    When I open a book
      And I double click on title
      And I highlight title
      And I wait for 5 seconds

  # Scenario: Performing a search
  #   Given I am on "home" page
  #   When I perform a search of "cerca"
  #   Then I should see a collection of results

  # Scenario: Logging out from the application
  #   Given I am on "login" page
  #   When I enter credentials
  #   Then Profile menu should be displayed
  #   When I logout
  #   Then Profile menu should not be displayed

  # Scenario: Opening a library
  #   Given I am on "login" page
  #   When I enter credentials
  #     And I click My Library link
  #   Then I should see a collection of results

  # Scenario: Opening a book
  #   Given I am on "home" page
  #   When I open a book
  #   Then Document page should be displayed
    

    # Scenario: Basic test 2
    # Given I am on "home" page
    # When I open join me page
    #   And I submit join form
    # Then Home page should be displayed
    # When I perform a search of "bird" with "Photos" filter
    #   Then I should see a collection of images