Feature: homepage
  Scenario: Visitor is on homepage and wants to use functionality
    Given Visitor is on homepage
    When I visit homepage
    Then I should see an input field for slug
