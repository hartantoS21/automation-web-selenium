$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login to the page",
  "description": "",
  "id": "login;successful-login-to-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@single"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to login.html page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am go to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I login to my account",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I empty cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I go to departments and choose electronics",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I go to \"Headphones\" category",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I go to first product",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I add product to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I search \"Macbook Pro\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I go to second product",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I add product as many as \"2\" items",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I go to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I remove item product number \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I change the quantity of the product \"1\" into \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I exit browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iOpenFirefoxBrowser()"
});
formatter.result({
  "duration": 4954372767,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iNavigateToLoginHtmlPage()"
});
formatter.result({
  "duration": 4539675883,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iProvideUsernameAsHiAndPasswordAsHi()"
});
formatter.result({
  "duration": 2144493987,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2237836932,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.emptyCart()"
});
formatter.result({
  "duration": 27802771324,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.moveToElement()"
});
formatter.result({
  "duration": 11764823890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Headphones",
      "offset": 9
    }
  ],
  "location": "LoginSteps.iGoTocategory(String)"
});
formatter.result({
  "duration": 5808378086,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.firstProduct()"
});
formatter.result({
  "duration": 2050849039,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.addToCartProduct()"
});
formatter.result({
  "duration": 1909096337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook Pro",
      "offset": 10
    }
  ],
  "location": "LoginSteps.iSearch(String)"
});
formatter.result({
  "duration": 4675584980,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.secondProduct()"
});
formatter.result({
  "duration": 5158054347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iAddProductwithQuantity(int)"
});
formatter.result({
  "duration": 14669028766,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.cartPage()"
});
formatter.result({
  "duration": 9328996398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "LoginSteps.removeItem(int)"
});
formatter.result({
  "duration": 9161041248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "LoginSteps.changeItem(int,int)"
});
formatter.result({
  "duration": 12792206570,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\"quantity\"]/option[1]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027MBP060-2.local\u0027, ip: \u0027fe80:0:0:0:1011:d002:3b46:985a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 67.0.4, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190619235627, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 29900, moz:profile: /var/folders/g0/z8bmf2x12qg..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 18.6.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 750446fa-e37f-0744-afca-a0758c0b96e4\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"quantity\"]/option[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat com.jcg.StepDefinitions.LoginSteps.changeItem(LoginSteps.java:190)\n\tat ✽.Then I change the quantity of the product \"1\" into \"1\"(features/login.feature:19)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.exitBrowser()"
});
formatter.result({
  "status": "skipped"
});
});