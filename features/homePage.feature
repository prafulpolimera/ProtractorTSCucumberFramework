Feature: Validate Angular JS Home Page

        @RegressionTest
        Scenario: Validate user details submission
                Given I will navigate to the AngularJS Home Page
                When I will enter the user details and submit
                Then I will validate the "Success!" message


        @FunctionalTest
        Scenario Outline: Scenario Outline name
                Given I will navigate to the AngularJS Home Page
                When I will enter the "<username>" in username field
                And I will enter the "<email>" in email field
                Then I will validate the "<message>" message

                Examples:
                        | username | email         | message  |
                        | Anu      | test@test.com | Failure! |
                        | Anu2     | test@test.com | Success! |