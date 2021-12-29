Feature: Set alarm
  In order to control when I should walk my dog
  As a busy owner
  I want to be able to set an alarm

Scenario:
  Given I am logged in  
  When I press the edit alarm button
  And set the alarm time to 10
  Then the countdown is reset to the set value