package userStepDefinitions;

import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import managers.PageObjectManager;
import managers.WebDriverManager;
import pageObjects.HomePage;
import pageObjects.ProductDetailsPage;
import utilities.Log;

public class ProductDetailsSteps {
	HomePage homePage;
	ProductDetailsPage productDetailsPage;
	PageObjectManager pageObjectManager;
	WebDriverManager webDriverManager;
	WebDriver driver;
	

	@Before
	public void startIteration() {
		webDriverManager = new WebDriverManager();
		driver = webDriverManager.getDriver();
		DOMConfigurator.configure("log4j.xml");
		Log.startTestCase();			

	}
	
	@Given("^User has selected product \"([^\"]*)\" from the custom made section in suitsupply website$")
	public void user_has_selected_product_from_the_custom_made_section_in_suitsupply_website(String ProductType) throws Throwable {
		pageObjectManager = new PageObjectManager(driver);
		homePage = pageObjectManager.getHomePage();
		homePage.navigateToCustomMadeProductDetails(ProductType);
	    
	}

	@When("^User provides fabric details as \"([^\"]*)\"$")
	public void user_provides_fabric_details_as(String Fabric) throws Throwable {
		productDetailsPage = pageObjectManager.getProductDetailsPage();
		productDetailsPage.selectFabricDetails(Fabric);
	   
	}

	@When("^User provides fit details as \"([^\"]*)\"$")
	public void user_provides_fit_details_as(String Fit) throws Throwable {
		productDetailsPage.selectFitDetails(Fit);
	    
	}

	@When("^User provides turn up details as \"([^\"]*)\"$")
	public void user_provides_turn_up_details_as(String TurnUp) throws Throwable {
		productDetailsPage.selectTurnUpDetails(TurnUp);
	    
	}

	@When("^User provides waistband details as \"([^\"]*)\"$")
	public void user_provides_waistband_details_as(String Waistband) throws Throwable {
		productDetailsPage.selectWaistbandDetails(Waistband);
	    
	}

	@When("^User provides waistcoat details as \"([^\"]*)\"$")
	public void user_provides_waistcoat_details_as(String Waistcoat) throws Throwable {
		productDetailsPage.selectWaistcoatDetails(Waistcoat);
	    
	}

	@When("^User provides additional trousers detail as \"([^\"]*)\"$")
	public void user_provides_additional_trousers_detail_as(String AdditionalTrouser) throws Throwable {
		productDetailsPage.selectAdditionalTrouserDetails(AdditionalTrouser);
	   
	}

	@When("^User provides size details as \"([^\"]*)\"$")
	public void user_provides_size_details_as(String SizeDetails) throws Throwable {
		productDetailsPage.selectSizeDetails(SizeDetails);

	}
	
	@When("^User provides collar details as \"([^\"]*)\"$")
	public void user_provides_collar_details_as(String CollarDetails) throws Throwable {
		productDetailsPage.selectCollarDetails(CollarDetails);

	}
	
	@When("^User provides cuff details as \"([^\"]*)\"$")
	public void user_provides_cuff_details_as(String CuffDetails) throws Throwable {
		productDetailsPage.selectCuffDetails(CuffDetails);

	}
	
	@When("^User provides monogram details as \"([^\"]*)\"$")
	public void user_provides_monogram_details_as(String MonogramDetails) throws Throwable {
		productDetailsPage.selectMonogramDetails(MonogramDetails);

	}
	
	@Then("^User is able to add the product to bag$")
	public void user_is_able_to_add_the_product_to_bag() throws Throwable {
		productDetailsPage.selectAddToBagButton();
	
	}
	
	
	
	@After
	public void endIteration() {
	
		webDriverManager.closeDriver();
		Log.endTestCase();;

	}
}
