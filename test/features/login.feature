Feature: Login
  Login to My Porsche Portal

  Scenario Outline: Login with Porsche ID Accounts
    Given I am on Porsche login page
    When I enter Porsche ID <email>
      And I enter password <password>
      And I click on login
    Then I should be logged in as a <name>

    Examples:
      | email                         | password   | name        |
      | mmasetic+1593161175@gmail.com | Password1! | Test Test   |
      | mmasetic+1593161219@gmail.com | Password1! | Test2 Test2 |
      | mmasetic+1593161253@gmail.com | Password1! | Test3 Test3 |