package com.test.automation.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.test.automation.PageObjectModel.DriverInitializer;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.FileReader;
import java.util.List;
import java.util.Set;

public class BeginSteps {

    WebDriver webDriver = null;
    

    @SuppressWarnings("deprecation")
	@Given("^I open firefox browser$")
    public void iOpenFirefoxBrowser() throws Throwable {
        //webDriver = DriverInitializer.getDriver("firefox");
        DesiredCapabilities caps=DesiredCapabilities.firefox();
        
        FirefoxProfile profile = new FirefoxProfile();
        profile.setAcceptUntrustedCertificates(false);
        profile.setAssumeUntrustedCertificateIssuer(true);
        profile.setPreference("browser.download.folderList", 2);
        profile.setPreference("browser.helperApps.alwaysAsk.force", false);
        profile.setPreference("browser.cache.disk.enable", false);
        profile.setPreference("browser.cache.memory.enable", false);
        profile.setPreference("browser.cache.offline.enable", false);
        profile.setPreference("network.http.use-cache", false);
		
		caps.setCapability(FirefoxDriver.PROFILE, profile);
		webDriver =  new FirefoxDriver(caps);
        webDriver.manage().deleteAllCookies();
        Thread.sleep(4000);
    }
    @Given("^I open chrome browser$")
    public void iOpenChromeBrowser() throws Throwable {
        webDriver = DriverInitializer.getDriver("chrome");
        webDriver.manage().deleteAllCookies();
    }

    @When("^I navigate to kumparan page$")
    public void iNavigateToKumparanHtmlPage() throws Throwable {
        webDriver.get(DriverInitializer.getProperty("kumparan.url"));
        webDriver.manage().window().maximize();
    }

    @Then("^I exit browser$")
    public void exitBrowser() throws Throwable{
    	Thread.sleep(8000);
    	webDriver.quit();
    }
    
    @When("^I add item product number \"([^\"]*)\"$")
    public void addItem(int item_number) throws Throwable {
    	Thread.sleep(8000);
    	webDriver.findElement(By.id("a-autoid-"+(item_number-1)+"-announce")).click();
    	//List<WebElement> someElements =webDriver.findElements(By.linkText("Delete"));
    	
    }
  //*[@id="dropdown1_0"]
    @When("^I change the quantity of the product \"([^\"]*)\" into \"([^\"]*)\"$")
    public void changeItem(int item_number, int quantity) throws Throwable {
    	Thread.sleep(8000);
    	webDriver.findElement(By.id("a-autoid-"+(item_number-1)+"-announce")).click();
    	Thread.sleep(4000);
    	try {
    		webDriver.findElement(By.id("dropdown"+item_number+"_"+(quantity-1)+"")).click();
    	}catch(Exception ez) {
    		webDriver.findElement(By.xpath("//*[@id=\"quantity\"]/option["+quantity+"]"));	
    	}
    }
    
    @When("^I provide username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iProvideUsernameAsAndPasswordAs(String username, String password) throws Throwable {
        WebElement webElement = webDriver.findElement(By.id("username"));
        webElement.sendKeys(username);
        webElement = webDriver.findElement(By.id("password"));
        webElement.sendKeys(password);
    }

    @Then("^name should be \"([^\"]*)\"$")
    public void nameShouldBe(String name) throws Throwable {
        WebElement webElement = webDriver.findElement(By.id("name"));
        try {
            assertThat(webElement.getText()).isEqualTo(name);
        } finally {
            webDriver.quit();
        }
    }
    
    @Then("^I click \"([^\"]*)\"$")
    public void iClick(String element) throws Throwable{
    	Thread.sleep(3000);
    	element = element.replace(" ", ".").toLowerCase();
    	String element1 = DriverInitializer.getProperty(element);
    	System.out.println("Element = "+element1);
    	try {
    		String element2 = "//*[@data-qa-id=\""+element1+"\"]";
	    	WebElement webElement = webDriver.findElement(By.xpath(element2));
	    	webElement.click();
    	}catch(Exception e) {
    		try {
    			WebElement webElement = webDriver.findElement(By.xpath(element1));
    			webElement.click();
    		}catch (Exception ex) {
    			WebElement webElement = webDriver.findElement(By.className(element1));
    			webElement.click();
    		}
    	}
    	Thread.sleep(5000);
    }
    
    @And("^I wait for \"([^\"]*)\" seconds$")
    public void iWait(String sleep) throws Throwable{
    	Thread.sleep(Integer.parseInt(sleep)*1000);
    }
    @When("^I login using facebook with valid data$")
    public void iLoginWithFacebook()throws Throwable{
    	String parentWinHandle = webDriver.getWindowHandle();
    	Set<String> winHandles = webDriver.getWindowHandles();
        // Loop through all handles
        for(String handle: winHandles){
            	System.out.println(handle);
            	webDriver.switchTo().window(handle);
            	Thread.sleep(1000);
        }
        
        String element1 = DriverInitializer.getProperty("email.facebook");
        webDriver.findElement(By.id(element1)).sendKeys("hsbudi13@gmail.com");
        
        element1 = DriverInitializer.getProperty("password.facebook");
        webDriver.findElement(By.id(element1)).sendKeys("hsbudi12");
        
        element1 = DriverInitializer.getProperty("login.button.facebook");
        String button = "//*[@value=\""+element1+"\"]";
        webDriver.findElement(By.xpath(button)).click();
        try {
            element1 = DriverInitializer.getProperty("confirm.button.facebook");
            button = "//*[@name=\""+element1+"\"]";
        	webDriver.findElement(By.xpath(button)).click();
        }catch(Exception e) {
        	
        }
        Thread.sleep(10000);
        winHandles = webDriver.getWindowHandles();
        for(String handle: winHandles){
            	System.out.println(handle);
            	webDriver.switchTo().window(handle);
            	Thread.sleep(1000);
        }
        webDriver.switchTo().window(parentWinHandle);
        Thread.sleep(5000);
    }
    
    @When("^I login using facebook with invalid data$")
    public void iLoginWithFacebookInvalid()throws Throwable{
    	String parentWinHandle = webDriver.getWindowHandle();
    	Set<String> winHandles = webDriver.getWindowHandles();
        // Loop through all handles
    	Thread.sleep(5000);
        for(String handle: winHandles){
            	System.out.println(handle);
            	webDriver.switchTo().window(handle);
            	Thread.sleep(3000);
        }
        Thread.sleep(5000);
        String element1 = DriverInitializer.getProperty("email.facebook");
        webDriver.findElement(By.id(element1)).sendKeys("zetia@");
        
        element1 = DriverInitializer.getProperty("password.facebook");
        webDriver.findElement(By.id(element1)).sendKeys("hartantoS12");
        
        element1 = DriverInitializer.getProperty("login.button.facebook");
        String button = "//*[@value=\""+element1+"\"]";
        webDriver.findElement(By.xpath(button)).click();
        
        Thread.sleep(5000);
        element1 = DriverInitializer.getProperty("facebook.error.message");
    	boolean display=false;
    	try {
        	String element2 = "//*[@data-qa-id=\""+element1+"\"]";
	    	display = webDriver.findElement(By.xpath(element2)).isDisplayed();
    	}catch(Exception e) {
    		display = webDriver.findElement(By.id(element1)).isDisplayed();
    	}

    	element1 = DriverInitializer.getProperty("email.facebook");
        webDriver.findElement(By.id(element1)).sendKeys("");
        
        element1 = DriverInitializer.getProperty("password.facebook");
        webDriver.findElement(By.id(element1)).sendKeys("hartantoS12");
        try {
	        element1 = DriverInitializer.getProperty("login.button.facebook");
	        button = "//*[@value=\""+element1+"\"]";
	        webDriver.findElement(By.xpath(button)).click();
        }catch(Exception e) {
        	element1 = DriverInitializer.getProperty("login.button.facebook2");
 	        button = "//*[@value=\""+element1+"\"]";
 	        webDriver.findElement(By.xpath(button)).click();
        }
        Thread.sleep(5000);
        element1 = DriverInitializer.getProperty("facebook.error.message");
    	display=false;
    	try {
        	String element2 = "//*[@data-qa-id=\""+element1+"\"]";
	    	display = webDriver.findElement(By.xpath(element2)).isDisplayed();
    	}catch(Exception e) {
    		display = webDriver.findElement(By.id(element1)).isDisplayed();
    	}
    	
    	element1 = DriverInitializer.getProperty("email.facebook");
        webDriver.findElement(By.id(element1)).sendKeys("zetiawan.h@gmail.com");
        
        element1 = DriverInitializer.getProperty("password.facebook");
        webDriver.findElement(By.id(element1)).sendKeys("");
        
        try {
	        element1 = DriverInitializer.getProperty("login.button.facebook");
	        button = "//*[@value=\""+element1+"\"]";
	        webDriver.findElement(By.xpath(button)).click();
        }catch(Exception e) {
        	element1 = DriverInitializer.getProperty("login.button.facebook2");
 	        button = "//*[@value=\""+element1+"\"]";
        }
        element1 = DriverInitializer.getProperty("facebook.error.message");
        Thread.sleep(5000);
    	display=false;
    	try {
        	String element2 = "//*[@data-qa-id=\""+element1+"\"]";
	    	display = webDriver.findElement(By.xpath(element2)).isDisplayed();
    	}catch(Exception e) {
    		display = webDriver.findElement(By.id(element1)).isDisplayed();
    	}
    }
    
    @Then("^I should see \"([^\"]*)\"$")
    public void iShouldSee(String element) throws Throwable {
    	Thread.sleep(3000);
    	element = element.replace(" ", ".").toLowerCase();
    	String element1 = DriverInitializer.getProperty(element);
    	boolean display=false;
    	try {
        	String element2 = "//*[@data-qa-id=\""+element1+"\"]";
	    	display = webDriver.findElement(By.xpath(element2)).isDisplayed();
    	}catch(Exception e) {
    		display = webDriver.findElement(By.id(element1)).isDisplayed();
    	}
    	if(display==true) {
    		System.out.println("element ditemukan");
    	}else {
    		System.out.println("element tidak ditemukan");
    	}
    }
    
    @Then("^I login using gmail with valid data$")
    public void iLoginUsingGmailWithValidData() throws Throwable {
    	String parentWinHandle = webDriver.getWindowHandle();
    	Set<String> winHandles = webDriver.getWindowHandles();
        // Loop through all handles
        for(String handle: winHandles){
            	System.out.println(handle);
            	webDriver.switchTo().window(handle);
            	Thread.sleep(1000);
        }
        Thread.sleep(5000);
        String element1 = DriverInitializer.getProperty("email.gmail");
        webDriver.findElement(By.id(element1)).sendKeys("test.automationcod@gmail.com");
        
        element1 = DriverInitializer.getProperty("next.button.gmail");
        webDriver.findElement(By.id(element1)).click();
        Thread.sleep(3000);
        element1 = DriverInitializer.getProperty("password.gmail");
        webDriver.findElement(By.xpath(element1)).sendKeys("hartantoS12");
        
        element1 = DriverInitializer.getProperty("password.next");
        Thread.sleep(3000);
        webDriver.findElement(By.id(element1)).click();
        winHandles = webDriver.getWindowHandles();
        for(String handle: winHandles){
            	System.out.println(handle);
            	webDriver.switchTo().window(handle);
            	Thread.sleep(1000);
        }
        webDriver.switchTo().window(parentWinHandle);
        Thread.sleep(5000);
    }
    
    @Then("^I login using gmail with invalid data email$")
    public void iLoginUsingGmailWithInvalidData() throws Throwable {
    	String parentWinHandle = webDriver.getWindowHandle();
    	Set<String> winHandles = webDriver.getWindowHandles();
        // Loop through all handles
        for(String handle: winHandles){
            	System.out.println(handle);
            	webDriver.switchTo().window(handle);
            	Thread.sleep(1000);
        }
        Thread.sleep(5000);
        String element1 = DriverInitializer.getProperty("email.gmail");
        webDriver.findElement(By.id(element1)).sendKeys("zetiawan.h@yahoo.com");
        element1 = DriverInitializer.getProperty("next.button.gmail");
        webDriver.findElement(By.id(element1)).click();
        Thread.sleep(3000);
        element1 = DriverInitializer.getProperty("email.gmail");
        webDriver.findElement(By.id(element1)).clear();
        webDriver.findElement(By.id(element1)).sendKeys("zetiawan.h@gmail.com");
        element1 = DriverInitializer.getProperty("next.button.gmail");
        webDriver.findElement(By.id(element1)).click();
    }
    
    @Then("^I login using gmail with invalid data password$")
    public void iLoginUsingGmailWithInvalidPassword() throws Throwable {
    	String parentWinHandle = webDriver.getWindowHandle();
    	Set<String> winHandles = webDriver.getWindowHandles();
        // Loop through all handles
        for(String handle: winHandles){
            	System.out.println(handle);
            	webDriver.switchTo().window(handle);
            	Thread.sleep(1000);
        }
        Thread.sleep(5000);
        String element1 = DriverInitializer.getProperty("email.gmail");
        webDriver.findElement(By.id(element1)).sendKeys("zetiawan.h@gmail.com");
        element1 = DriverInitializer.getProperty("next.button.gmail");
        webDriver.findElement(By.id(element1)).click();
        Thread.sleep(3000);
        element1 = DriverInitializer.getProperty("password.next");
        Thread.sleep(3000);
        webDriver.findElement(By.id(element1)).click();
    }
    
    @Then("^I go to \"([^\"]*)\"$")
    public void iGoTo(String arg1) throws Throwable {
        webDriver.findElement(By.linkText(arg1)).click();
    }
    
    @Then("^I type \"([^\"]*)\" on \"([^\"]*)\"$")
    public void iTypeOn(String arg1, String arg2) throws Throwable {
    	String element = arg2.replace(" ", ".").toLowerCase();
    	String element1 = DriverInitializer.getProperty(element);
    	System.out.println("Element = "+element1);
    	try {
    		String element2 = "//*[@data-qa-id=\""+element1+"\"]";
	    	WebElement webElement = webDriver.findElement(By.xpath(element2));
	    	webElement.click();
	    	webElement.sendKeys(arg1);
    	}catch(Exception e) {
    		try {
    			WebElement webElement = webDriver.findElement(By.xpath(element1));
    			webElement.click();
    			webElement.sendKeys(arg1);
    		}catch (Exception ex) {
    			WebElement webElement = webDriver.findElement(By.className(element1));
    			webElement.click();
    			webElement.sendKeys(arg1);
    		}
    	}
    	Thread.sleep(3000); 
    }
    @Then("^I scroll to bottom$")
    public void iScrollToBottom() throws Throwable {
    	JavascriptExecutor js = ((JavascriptExecutor) webDriver);
    	js.executeScript("window.scrollTo(0, document.body.scrollHeight-300)");
    	Thread.sleep(5000);
    }
}