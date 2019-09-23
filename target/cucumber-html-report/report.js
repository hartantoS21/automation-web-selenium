$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login and add / remove item",
  "description": "",
  "id": "login-and-add-/-remove-item",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@single"
    }
  ]
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to kumparan page",
  "keyword": "Then "
});
formatter.match({
  "location": "BeginSteps.iOpenFirefoxBrowser()"
});
formatter.result({
  "duration": 9818937047,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 8089762490,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "login using facebook with valid data",
  "description": "",
  "id": "login-and-add-/-remove-item;login-using-facebook-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I click \"login\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I wait for \"6\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click \"login facebook\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I login using facebook with valid data",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click \"profile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I exit browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 8447684481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 6005539526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login facebook",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
