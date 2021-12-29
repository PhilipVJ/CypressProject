Feature: Toggle dark mode
  In order to use the application at night without eye strain
  As a late night user
  I want to be able to enable dark mode

Scenario:
  Given I am logged in  
  When I press the dark mode toggle
  Then the colorscheme becomes dark