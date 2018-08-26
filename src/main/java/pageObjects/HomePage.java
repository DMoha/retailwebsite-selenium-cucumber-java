package pageObjects;

import org.openqa.selenium.WebDriver;

import managers.FileReaderManager;
import utilities.Actions;
import utilities.ObjectLocator;

public class HomePage {
	
	public static ObjectLocator tabCustomMade = new ObjectLocator("Xpath", 
			"//li/a[@href='https://eu.suitsupply.com/on/demandware.store/Sites-INT-Site/en/Configurator-Show?p=%2fconfigurator']", 
			"Custom Made tab in the Home Page");
	public static ObjectLocator subtabProductType = new ObjectLocator("Xpath", 
			"//div[@class='tab_dis-n _p-v-0d _p-h-0f']//a[@href='https://eu.suitsupply.com/on/demandware.store/Sites-INT-Site/en/Configurator-Show?type=$']", 
			"Product Type sub tab under Custom Made tab");
	public static ObjectLocator linkCloseCookies = new ObjectLocator("Xpath", 
			"//i[@class='icon-suiticon icon-suiticon-delete-1 _te-cl-0g _pl-r _te-lh-0c js-cookie-bar-close sel-cookieaccepted-trigger']", 
			"Close Cookies");
	public static ObjectLocator linkCloseCountryVerification = new ObjectLocator("Xpath", 
			"//i[@class='icon-suiticon icon-suiticon-delete-1 _icon-suiticon-va-0a _te-cl-0g _pl-r _te-lh-0c js-country-verification-bar-close sel-accept-trigger']", 
			"Close Country Verification");
	
	
	
	public static String ProductType;
	
	Actions action;
	
	public HomePage(WebDriver driver) {
		action = new Actions(driver);
	}

	//Navigating to the Custom Made Product details page
	public HomePage navigateToCustomMadeProductDetails(String productType){
		
		ProductType = productType;
		String  url = FileReaderManager.getInstance().getConfigReader().getApplicationUrl();
		action.OpenURL(url).Waitforpageload();
		
		action.threadWait();
		if(action.verifyElementPresentinUI(linkCloseCookies)) {
			action.Click(linkCloseCookies);
		}
		
		action.WaitForWebElement(linkCloseCountryVerification)
		      .Click(linkCloseCountryVerification);
		
		action.WaitForWebElement(tabCustomMade)
			  .Click(tabCustomMade);
		
		action.Click(subtabProductType.ReplaceLocator(ProductType.toLowerCase()));
			
		return this;
	}
	
}
