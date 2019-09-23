@single	
Feature: Login, see news, and add comment
	Background:
		Given I open firefox browser
    Then I navigate to kumparan page

  Scenario: login using facebook with valid data
		When I click "login"
		Then I wait for "6" seconds
		And I click "login facebook"
		Then I login using facebook with valid data
		Then I click "profile"
		And I exit browser
	
  Scenario: login using facebook with invalid data email & password
		When I click "login"
		Then I wait for "5" seconds
		And I click "login facebook"
		Then I login using facebook with invalid data
		And I should see "facebook error message"
		And I exit browser
		
	Scenario: login using gmail with valid data
		When I click "login"
		Then I wait for "5" seconds
		And I click "login gmail"
		Then I login using gmail with valid data
		Then I click "profile"
		And I exit browser
	
  Scenario: login using gmail with invalid data email
		When I click "login"
		Then I wait for "5" seconds
		And I click "login gmail"
		Then I login using gmail with invalid data email
		And I exit browser
		
	Scenario: login using gmail with invalid data password
		When I click "login"
		Then I wait for "5" seconds
		And I click "login gmail"
		Then I login using gmail with invalid data password
		And I exit browser

	Scenario: user facebook to see news
    When I go to "News"
		Then I wait for "10" seconds
		And I should see "Title page"
		Then I go to "Home"
		And I click "login"
		Then I click "login facebook"
		And I wait for "5" seconds
		Then I login using facebook with valid data
		When I go to "News"
		And I wait for "10" seconds
		Then I should see "Title page"
		When I go to "Trending"
		And I wait for "10" seconds
		Then I exit browser
	
	Scenario: user gmail to see news
    When I go to "News"
		And I wait for "10" seconds
		Then I should see "Title page"
		And I go to "Home"
		Then I click "login"
		And I click "login gmail"
		Then I wait for "5" seconds
		When I login using gmail with invalid data email
		And I go to "News"
		Then I wait for "10" seconds
		And I should see "Title page"
		When I go to "Trending"
		Then I wait for "10" seconds
		And I exit browser
		
	Scenario: user gmail to see news & put comment 
    When I click "login"
		Then I click "login gmail"
		And I wait for "5" seconds
		Then I login using gmail with valid data
		And I wait for "5" seconds
    When I go to "News"
		And I wait for "10" seconds
		Then I should see "Title page"
		When I click "News 1"
		And I click "Send comment"
		Then I type "Good News" on "Input comment"
		And I click "Send comment"
		And I exit browser
		
	Scenario: user facebook to see news & put comment 
		Whenn I click "login"
		Then I click "login facebook"
		And I wait for "5" seconds
		Then I login using facebook with valid data
		And I wait for "5" seconds
    When I go to "News"
		And I wait for "10" seconds
		Then I should see "Title page"
		And I click "News 1"
		When I click "Send comment"
		And I type "Good News" on "Input comment"
		Then I click "Send comment"
		And I exit browser