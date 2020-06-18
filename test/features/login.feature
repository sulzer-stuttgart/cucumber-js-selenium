Feature: Login
  Login to My Porsche Portal

  Scenario: Login with Porsche ID Account
    Given I enter Porsche ID 'mustafa.masetic@sulzer.de'
    And I enter password 'Password1!'
    And I click on login
    Then I should be logged