$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/dashboard.feature");
formatter.feature({
  "name": "Dashboards",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate user can be able add and delete in \"\u003csections\u003e\" section",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "I navigate to Interview Prep",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"test@yahoo.com\" in the \"Enter Username\" input box",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter \"testUserPassword\" in the \"Enter Password\" input box",
  "keyword": "Then "
});
formatter.step({
  "name": "I click \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \"\u003csections\u003e\" section",
  "keyword": "Then "
});
formatter.step({
  "name": "I click \"\u003cbuttons\u003e\" button",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter \"message text\" in the \"Your Input...\" input box",
  "keyword": "Then "
});
formatter.step({
  "name": "I click \"Enter\" button",
  "keyword": "Then "
});
formatter.step({
  "name": "I validate \"message text\" is displayed in \"\u003csections\u003e\" window",
  "keyword": "And "
});
formatter.step({
  "name": "I click \"Delete\" button of \"message text\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I validate \"message text\" is  Not displayed in \"\u003csections\u003e\" window",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sections",
        "buttons"
      ]
    },
    {
      "cells": [
        "Do\u0027s",
        "Add do"
      ]
    },
    {
      "cells": [
        "Dont\u0027s",
        "Add don\u0027t"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate user can be able add and delete in \"Do\u0027s\" section",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Interview Prep",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iNavigateToInterviewPrep()"
});
formatter.write("2021-02-28 02:03:16 PASS: Successfully navigated to the url");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"test@yahoo.com\" in the \"Enter Username\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-28 02:03:16 PASS: test@yahoo.com was entered in Enter Username input box successfully");
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"testUserPassword\" in the \"Enter Password\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-28 02:03:17 PASS: testuser123 was entered in Enter Password input box successfully");
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 02:03:18 PASS: Login button was successfully clicked ");
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Do\u0027s\" section",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardSteps.iShouldSeeSection(String)"
});
formatter.write("2021-02-28 02:03:18 PASS: The section is displayed: Do\u0027s");
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Add do\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 02:03:19 PASS: Add do button was successfully clicked ");
formatter.embedding("image/png", "embedded4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"message text\" in the \"Your Input...\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-28 02:03:20 PASS: message text was entered in Your Input... input box successfully");
formatter.embedding("image/png", "embedded5.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Enter\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 02:03:21 PASS: Enter button was successfully clicked ");
formatter.embedding("image/png", "embedded6.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate \"message text\" is displayed in \"Do\u0027s\" window",
  "keyword": "And "
});
formatter.match({
  "location": "DashboardSteps.iValidateIsDisplayedInWindow(String,String)"
});
formatter.write("2021-02-28 02:03:21 PASS: The text exists in section: Do\u0027s");
formatter.embedding("image/png", "embedded7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Delete\" button of \"message text\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardSteps.iClickButtonOf(String,String)"
});
formatter.write("2021-02-28 02:03:22 PASS: Delete was clicked successfully ");
formatter.embedding("image/png", "embedded8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate \"message text\" is  Not displayed in \"Do\u0027s\" window",
  "keyword": "And "
});
formatter.match({
  "location": "DashboardSteps.iValidateIsNotDisplayedInWindow(String,String)"
});
formatter.write("2021-02-28 02:03:22 PASS: The text does not exist as expected in section: Do\u0027s");
formatter.embedding("image/png", "embedded9.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate user can be able add and delete in \"Dont\u0027s\" section",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Interview Prep",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iNavigateToInterviewPrep()"
});
