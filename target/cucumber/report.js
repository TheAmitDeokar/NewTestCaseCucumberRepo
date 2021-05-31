$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('QK1\TestUsingCucumber\pages\LoginTestcases.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Login functionality of Orange HRM application",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing login functionality with valid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"Admin\" in UserName field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"admin123\" in Password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should enter into an application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestcasesStepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 8025370700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "LoginTestcasesStepDefinations.EnterUserName(String)"
});
formatter.result({
  "duration": 203820400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 13
    }
  ],
  "location": "LoginTestcasesStepDefinations.EnterPassword(String)"
});
formatter.result({
  "duration": 195426800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestcasesStepDefinations.ClickLogin_button()"
});
formatter.result({
  "duration": 5597350700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestcasesStepDefinations.CheckIfUserisLoggedIn()"
});
formatter.result({
  "duration": 48300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Testing login functionality with Invalid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters Amit in UserName field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters Deokar in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login Error:Invalid credentials should appear",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestcasesStepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 6018164100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amit",
      "offset": 12
    }
  ],
  "location": "LoginTestcasesStepDefinations.EnterUserName1(String)"
});
formatter.result({
  "duration": 142512400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deokar",
      "offset": 12
    }
  ],
  "location": "LoginTestcasesStepDefinations.EnterPassword1(String)"
});
formatter.result({
  "duration": 159217500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestcasesStepDefinations.ClickLogin_button()"
});
formatter.result({
  "duration": 1059615700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 12
    }
  ],
  "location": "LoginTestcasesStepDefinations.Login_Error_Password_cannot_be_empty_should_appear(String)"
});
formatter.result({
  "duration": 62832000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Testing login functionality with Invalid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters  in UserName field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters admin123 in Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Login Error:Username cannot be empty should appear",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestcasesStepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 6661799400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "LoginTestcasesStepDefinations.EnterUserName1(String)"
});
formatter.result({
  "duration": 148761100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 12
    }
  ],
  "location": "LoginTestcasesStepDefinations.EnterPassword1(String)"
});
formatter.result({
  "duration": 177662700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestcasesStepDefinations.ClickLogin_button()"
});
formatter.result({
  "duration": 78120500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 12
    }
  ],
  "location": "LoginTestcasesStepDefinations.Login_Error_Password_cannot_be_empty_should_appear(String)"
});
formatter.result({
  "duration": 56501200,
  "status": "passed"
});
});