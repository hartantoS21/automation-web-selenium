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
  "duration": 14146343796,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 20506983274,
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
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I wait for \"6\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click \"login facebook\"",
  "keyword": "Then "
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
  "duration": 4879013788,
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
  "duration": 6009840971,
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
formatter.result({
  "duration": 3946751566,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iLoginWithFacebook()"
});
formatter.result({
  "duration": 21301701473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3967446112,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "duration": 15449809784,
  "status": "passed"
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
  "duration": 14147264539,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 14207991164,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login using facebook with invalid data email \u0026 password",
  "description": "",
  "id": "login-and-add-/-remove-item;login-using-facebook-with-invalid-data-email-\u0026-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click \"login facebook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I login using facebook with invalid data",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should see \"facebook error message\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
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
  "duration": 9664058883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5001948465,
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
formatter.result({
  "duration": 110310050,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: .btn\\-login\\-fb\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027Wawan.local\u0027, ip: \u0027fe80:0:0:0:82a:1c3a:f6bb:15e2%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 69.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190917135527, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 3609, moz:profile: /var/folders/g0/z8bmf2x12qg..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 18.6.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5723ee7e-d077-5b4e-8152-57b48d14b24f\n*** Element info: {Using\u003dclass name, value\u003dbtn-login-fb}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:408)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat com.test.automation.StepDefinitions.BeginSteps.iClick(BeginSteps.java:121)\n\tat ✽.Then I click \"login facebook\"(features/login.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "location": "BeginSteps.iLoginWithFacebookInvalid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "facebook error message",
      "offset": 14
    }
  ],
  "location": "BeginSteps.iShouldSee(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 12805587067,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 7466597362,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "login using gmail with valid data",
  "description": "",
  "id": "login-and-add-/-remove-item;login-using-gmail-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click \"login gmail\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I login using gmail with valid data",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click \"profile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
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
  "duration": 3558250535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5005131103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login gmail",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3448444809,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iLoginUsingGmailWithValidData()"
});
formatter.result({
  "duration": 22678236326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3357762265,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "duration": 9864104330,
  "status": "passed"
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
  "duration": 9583183193,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 6745688547,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "login using gmail with invalid data email",
  "description": "",
  "id": "login-and-add-/-remove-item;login-using-gmail-with-invalid-data-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click \"login gmail\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I login using gmail with invalid data email",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
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
  "duration": 8520261446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5005244846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login gmail",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 171301314,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: .btn\\-login\\-google\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027Wawan.local\u0027, ip: \u0027fe80:0:0:0:82a:1c3a:f6bb:15e2%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 69.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190917135527, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 3623, moz:profile: /var/folders/g0/z8bmf2x12qg..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 18.6.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3ebdb9f7-a8cf-d14a-9188-027b0b387421\n*** Element info: {Using\u003dclass name, value\u003dbtn-login-google}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:408)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat com.test.automation.StepDefinitions.BeginSteps.iClick(BeginSteps.java:121)\n\tat ✽.Then I click \"login gmail\"(features/login.feature:34)\n",
  "status": "failed"
});
formatter.match({
  "location": "BeginSteps.iLoginUsingGmailWithInvalidData()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 13467554935,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 19189140255,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "login using gmail with invalid data password",
  "description": "",
  "id": "login-and-add-/-remove-item;login-using-gmail-with-invalid-data-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I click \"login gmail\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I login using gmail with invalid data password",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
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
  "duration": 4458562568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5008594070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login gmail",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 4206398826,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iLoginUsingGmailWithInvalidPassword()"
});
formatter.result({
  "duration": 14676953643,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "duration": 16093623441,
  "status": "passed"
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
  "duration": 14352564200,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 16012420688,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "user facebook to see news",
  "description": "",
  "id": "login-and-add-/-remove-item;user-facebook-to-see-news",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I go to \"News\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should see \"Title page\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I go to \"Home\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click \"login facebook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I login using facebook with valid data",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I go to \"News\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should see \"Title page\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I go to \"Trending\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I exit browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "duration": 4262411695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 10001277044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title page",
      "offset": 14
    }
  ],
  "location": "BeginSteps.iShouldSee(String)"
});
formatter.result({
  "duration": 68189119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "duration": 744743881,
  "status": "passed"
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
  "duration": 3748928579,
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
formatter.result({
  "duration": 3737145117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5002520372,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iLoginWithFacebook()"
});
formatter.result({
  "duration": 20057690172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "duration": 788907927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 10005210920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title page",
      "offset": 14
    }
  ],
  "location": "BeginSteps.iShouldSee(String)"
});
formatter.result({
  "duration": 28843462,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #channel\\-title\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027Wawan.local\u0027, ip: \u0027fe80:0:0:0:82a:1c3a:f6bb:15e2%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 69.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190917135527, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 3637, moz:profile: /var/folders/g0/z8bmf2x12qg..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 18.6.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3ba6e2a6-fa0b-be4f-8099-22451ffe2f4e\n*** Element info: {Using\u003did, value\u003dchannel-title}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat com.test.automation.StepDefinitions.BeginSteps.iShouldSee(BeginSteps.java:260)\n\tat ✽.And I should see \"Title page\"(features/login.feature:56)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trending",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 17307925374,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 18001309131,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "user gmail to see news",
  "description": "",
  "id": "login-and-add-/-remove-item;user-gmail-to-see-news",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "I go to \"News\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should see \"Title page\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I go to \"Home\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I click \"login gmail\"",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I wait for \"5\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I login using gmail with invalid data email",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I go to \"News\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I should see \"Title page\"",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I go to \"Trending\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I exit browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "duration": 830730122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 10004588016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title page",
      "offset": 14
    }
  ],
  "location": "BeginSteps.iShouldSee(String)"
});
formatter.result({
  "duration": 60035335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "duration": 760959541,
  "status": "passed"
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
  "duration": 3504699758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login gmail",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 4032995977,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "BeginSteps.iLoginUsingGmailWithInvalidData()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Title page",
      "offset": 14
    }
  ],
  "location": "BeginSteps.iShouldSee(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Trending",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 13856288088,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 13147883433,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "user gmail to see news \u0026 put comment",
  "description": "",
  "id": "login-and-add-/-remove-item;user-gmail-to-see-news-\u0026-put-comment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I click \"login gmail\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I login using gmail with valid data",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I go to \"News\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I should see \"Title page\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click \"News 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click \"Send comment\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I type \"Good News\" on \"Input comment\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click \"Send comment\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
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
  "duration": 6828789040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login gmail",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3634874173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5005670794,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iLoginUsingGmailWithValidData()"
});
formatter.result({
  "duration": 23453886460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5002379107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "duration": 1159777764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 10003749914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title page",
      "offset": 14
    }
  ],
  "location": "BeginSteps.iShouldSee(String)"
});
formatter.result({
  "duration": 69017886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News 1",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 4450335650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send comment",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3768831272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Good News",
      "offset": 8
    },
    {
      "val": "Input comment",
      "offset": 23
    }
  ],
  "location": "BeginSteps.iTypeOn(String,String)"
});
formatter.result({
  "duration": 3525869602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send comment",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3517905059,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "duration": 9202178347,
  "status": "passed"
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
  "duration": 14237285179,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iNavigateToKumparanHtmlPage()"
});
formatter.result({
  "duration": 24514177188,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "user facebook to see news \u0026 put comment",
  "description": "",
  "id": "login-and-add-/-remove-item;user-facebook-to-see-news-\u0026-put-comment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 93,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "I click \"login facebook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I login using facebook with valid data",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I go to \"News\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I should see \"Title page\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click \"News 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click \"Send comment\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I type \"Good News\" on \"Input comment\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click \"Send comment\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
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
  "duration": 4518088752,
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
formatter.result({
  "duration": 4213160932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5005158012,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.iLoginWithFacebook()"
});
formatter.result({
  "duration": 21982761153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 5010418943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iGoTo(String)"
});
formatter.result({
  "duration": 1671067426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "BeginSteps.iWait(String)"
});
formatter.result({
  "duration": 10013818817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title page",
      "offset": 14
    }
  ],
  "location": "BeginSteps.iShouldSee(String)"
});
formatter.result({
  "duration": 156653171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News 1",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3956344321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send comment",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3808355935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Good News",
      "offset": 8
    },
    {
      "val": "Input comment",
      "offset": 23
    }
  ],
  "location": "BeginSteps.iTypeOn(String,String)"
});
formatter.result({
  "duration": 3901314121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send comment",
      "offset": 9
    }
  ],
  "location": "BeginSteps.iClick(String)"
});
formatter.result({
  "duration": 3534283283,
  "status": "passed"
});
formatter.match({
  "location": "BeginSteps.exitBrowser()"
});
formatter.result({
  "duration": 10695937877,
  "status": "passed"
});
});