$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/manageAccess.feature");
formatter.feature({
  "name": "Manage Access",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify admin can add new users",
  "description": "",
  "keyword": "Scenario"
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
formatter.write("2021-02-28 00:56:45 PASS: Successfully navigated to the url");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
