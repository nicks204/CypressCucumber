@login
Feature: This feature file will be used to test the login related scenarios

  Background: Login to application
    Given I have launched the swag labs application

  @login_success
  Scenario: Login Success
    When I enter the correct username and password
    And I click on the login button
    Then I should land on the products page

  @login_failure
  Scenario: Login Failure
    When I enter the incorrect username and password
    And I click on the login button
    Then I should get the error message "Epic sadface: Username and password do not match any user in this service"

  @datadriven
  Scenario: Login failure test using data driven
    When I enter the username as "standard_user"
    And I enter the password as "abc1234"
    And I click on the login button
    Then I should get the error message "Epic sadface: Username and password do not match any user in this service"

  @lockeduser
  Scenario: locked user test using data driven
    When I enter the username as "locked_out_user"
    And I enter the password as "secret_sauce"
    And I click on the login button
    Then I should get the error message "Epic sadface: Sorry, this user has been locked out."

  @examples
  Scenario: Login failure test using examples
    When I enter the username as "<UserName>"
    And I enter the password as "<Passsword>"
    And I click on the login button
    Then I should get the error message "<Error>"


    Examples:
      | UserName        | Passsword    | Error                                                                     |
      | standard_user   | abc1234      | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |