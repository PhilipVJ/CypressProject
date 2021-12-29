Feature: Change avatar
  In order to represent my dog properly
  As a dog owner
  I want to be able to change my dogs avatar

Scenario Outline: Change from one avatar to another
  Given I am logged in
  And the preselected avatar is <currentAvatar>
  When I press the edit button
  And click on avatar image <wantedAvatar>
  Then the selected avatar is <wantedAvatar>

Examples:
| currentAvatar | wantedAvatar |
|       1       |       2      |
|       2       |       3      |
|       3       |       1      |