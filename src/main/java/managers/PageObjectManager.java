package managers;


import org.openqa.selenium.WebDriver;

import pageObjects.ProductDetailsPage;
import pageObjects.HomePage;

public class PageObjectManager {

	private WebDriver driver;
	private HomePage homePage;
 	private ProductDetailsPage productDetailsPage;
 	
 	public PageObjectManager(WebDriver driver) {
 		 
		this.driver = driver;
 
	}
	public HomePage getHomePage(){
 
		return (homePage == null) ? homePage = new HomePage(driver) : homePage;
 
	}
	
	public ProductDetailsPage getProductDetailsPage(){
		 
		return (productDetailsPage == null) ? productDetailsPage = new ProductDetailsPage(driver) : productDetailsPage;
 
	}
	
	
	
}
