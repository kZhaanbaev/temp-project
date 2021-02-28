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
formatter.write("2021-02-28 01:26:29 PASS: Successfully navigated to the url");
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
formatter.write("2021-02-28 01:26:29 PASS: test@yahoo.com was entered in Enter Username input box successfully");
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
formatter.write("2021-02-28 01:26:30 PASS: testuser123 was entered in Enter Password input box successfully");
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
formatter.write("2021-02-28 01:26:31 PASS: Login button was successfully clicked ");
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
formatter.write("2021-02-28 01:26:32 PASS: The section is displayed: Do\u0027s");
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
