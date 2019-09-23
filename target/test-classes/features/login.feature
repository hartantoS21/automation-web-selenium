@single	
Feature: Login and add / remove item
	Background:
		Given I open firefox browser
    Then I navigate to kumparan page

  Scenario: login using facebook with valid data
		Then I click "login"
		Then I wait for "6" seconds
		Then I click "login facebook"
		Then I login using facebook with valid data
		Then I click "profile"
		And I exit browser
	
  Scenario: login using facebook with invalid data email & password
		Then I click "login"
		Then I wait for "5" seconds
		Then I click "login facebook"
		Then I login using facebook with invalid data
		And I should see "facebook error message"
		And I exit browser
		
	Scenario: login using gmail with valid data
		Then I click "login"
		Then I wait for "5" seconds
		Then I click "login gmail"
		Then I login using gmail with valid data
		Then I click "profile"
		And I exit browser
	
  Scenario: login using gmail with invalid data email
		Then I click "login"
		Then I wait for "5" seconds
		Then I click "login gmail"
		Then I login using gmail with invalid data email
		And I exit browser
		
	Scenario: login using gmail with invalid data password
		Then I click "login"
		Then I wait for "5" seconds
		Then I click "login gmail"
		Then I login using gmail with invalid data password
		And I exit browser

	Scenario: user facebook to see news
    And I go to "News"
		And I wait for "10" seconds
		And I should see "Title page"
		And I go to "Home"
		Then I click "login"
		Then I click "login facebook"
		And I wait for "5" seconds
		Then I login using facebook with valid data
		And I go to "News"
		And I wait for "10" seconds
		And I should see "Title page"
		And I go to "Trending"
		And I wait for "10" seconds
		And I exit browser
	
	Scenario: user gmail to see news
    And I go to "News"
		And I wait for "10" seconds
		And I should see "Title page"
		And I go to "Home"
		Then I click "login"
		Then I click "login gmail"
		And I wait for "5" seconds
		Then I login using gmail with invalid data email
		And I go to "News"
		And I wait for "10" seconds
		And I should see "Title page"
		And I go to "Trending"
		And I wait for "10" seconds
		And I exit browser
		
	Scenario: user gmail to see news & put comment 
    Then I click "login"
		Then I click "login gmail"
		And I wait for "5" seconds
		Then I login using gmail with valid data
		And I wait for "5" seconds
    And I go to "News"
		And I wait for "10" seconds
		And I should see "Title page"
		And I click "News 1"
		And I click "Send comment"
		And I type "Good News" on "Input comment"
		And I click "Send comment"
		And I exit browser
		
	Scenario: user facebook to see news & put comment 
		Then I click "login"
		Then I click "login facebook"
		And I wait for "5" seconds
		Then I login using facebook with valid data
		And I wait for "5" seconds
    And I go to "News"
		And I wait for "10" seconds
		And I should see "Title page"
		And I click "News 1"
		And I click "Send comment"
		And I type "Good News" on "Input comment"
		And I click "Send comment"
		And I exit browser