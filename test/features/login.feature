Feature: Login
  Login to My Porsche Portal

  Scenario: Login with Porsche ID Accounts
    Given I am on Porsche login page
    When I enter Porsche ID mmasetic+1593161175@gmail.com
      And I enter password 'enter password here'
      And I click on login
    Then I should be logged in as a Test Test

#    Examples:
#      | email                         | password   | name        |
#      | mmasetic+1593161175@gmail.com |  | Test Test   |
#      | mmasetic+1593161219@gmail.com |  | Test2 Test2 |
#      | mmasetic+1593161253@gmail.com |  | Test3 Test3 |