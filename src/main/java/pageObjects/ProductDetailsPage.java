package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import utilities.Actions;
import utilities.Log;
import utilities.ObjectLocator;

public class ProductDetailsPage {
	
	public static ObjectLocator linkFabricType = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-code='%']", "Fabric Selection in product details page");
	public static ObjectLocator linkJacketFit = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='jacket-fit']", "Jacket Fit section in product details page");
	public static ObjectLocator linkTrousersFit = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='trouser-fit']", "Trousers Fit section in product details page");
	public static ObjectLocator linkFitSelect = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='fit']", "Fit section in product details page");
	public static ObjectLocator linkCollarSelect = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='collar']", "Collar section in product details page");
	public static ObjectLocator linkCuffSelect = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='cuff']", "Cuff section in product details page");
	public static ObjectLocator linkMonogramSelect = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='monogram']", "Monogram section in product details page");
	public static ObjectLocator linkMonogramSkip = new ObjectLocator("Xpath", "//div[@data-item-type='monogram']//div[@class='_bl-ws-0d ']", "Skip Monogram section in product details page");
	public static ObjectLocator linkMonogramInitials = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='monogram']//input[contains(@id,'initialsText')]", "Monogram initials section in product details page");
	public static ObjectLocator linkAddMonogram = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='monogram']//div[@class='_bl-ws-0d _te-s-0b js-monogram-add-text']", "Add Monogram in product details page");
	public static ObjectLocator linkTurnUpSelect = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='turnup']", "Turn Up section in product details page");
	public static ObjectLocator linkWaistbandSelect = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='waistband']", "Waistband section in product details page");
	public static ObjectLocator linkWaistcoatSkip = new ObjectLocator("Xpath", "//div[@data-item-type='waistcoat-additionalProduct']//div[@class='_dis-f _fd-0b _jc-0d js-item-skip-content']//div[@class='_bl-ws-0d ']", "Skip Waistcoat section in product details page");
	public static ObjectLocator linkWaistcoatSelect = new ObjectLocator("Xpath", "//div[@data-item-name='$' and @data-item-type='waistcoat-additionalProduct']", "Waistcoat section in product details page");
	public static ObjectLocator linkAdditionalTrouserSkip = new ObjectLocator("Xpath", "//div[@data-item-type='trouser-additionalProduct']//div[@class='_dis-f _fd-0b _jc-0d js-item-skip-content']//div[@class='_bl-ws-0d ']", "Skip Additional Trouser section in product details page");
	public static ObjectLocator linkAdditionalTrouserSelect = new ObjectLocator("Xpath", "//div[@data-item-name='Selected' and @data-item-type='trouser-additionalProduct']", "Additional Trouser section in product details page");
	public static ObjectLocator linkTrouserSize = new ObjectLocator("Xpath", "//div[@class='_dis-f _fd-0b configurators--sizes-group-%']/div[$]/div[1]", "Trouser size section in product details page");
	public static ObjectLocator listTrouserSize = new ObjectLocator("Xpath", "//div[@class='_dis-f _fd-0b configurators--sizes-group-$']//input[@data-item-type='trouser-size']", "Trouser size list in product details page");
	public static ObjectLocator linkJacketSize = new ObjectLocator("Xpath", "//div[@class='_dis-f _fd-0b configurators--sizes-group-%']/div[$]/div[1]", "Jacket size section in product details page");
	public static ObjectLocator listJacketSize = new ObjectLocator("Xpath", "//div[@class='_dis-f _fd-0b configurators--sizes-group-$']//input[@data-item-type='jacket-size']", "Jacket size list in product details page");
	public static ObjectLocator linkSize = new ObjectLocator("Xpath", "//div[@class='_dis-f _fd-0b configurators--sizes-group-%']/div[$]/div[1]", "Size section in product details page");
	public static ObjectLocator listSize = new ObjectLocator("Xpath", "//div[@class='_dis-f _fd-0b configurators--sizes-group-$']//input[@name='shirt-size']", "Size list in product details page");
	public static ObjectLocator btnAddToBag = new ObjectLocator("Xpath", 
			"//div[@class='tab-portrait_dis-n mob_dis-n mob-small-landscape_dis-n _fs-0b js-action-block-content']//button[@class='btn btn--j _w-01 _p-0a tab-portrait_p-h mob-small-landscape_p-h _te-s-0b js-confirm']", "Add to Bag button in product details page");
	public static ObjectLocator btnSecureCheckout = new ObjectLocator("Xpath", 
			"//div[@class='shopping-bag__total _w-09-10 _m-h-cen _bl-bg-0e _p mob_m-n mob_w-01 js-shopping-bag__total']/a", "Secure Checkout in product details page");
	
	Actions action;
	
	public ProductDetailsPage(WebDriver driver) {
		action = new Actions(driver);
	}

	public ProductDetailsPage selectFabricDetails(String Fabric){
		if(!(Fabric.isEmpty())) {
			String FabricList[] = Fabric.split(";");
			String FabricName = FabricList[0];
			String FabricCode = FabricList[1];
			action.threadWait();
			action.Click(linkFabricType.ReplaceLocator("$", FabricName, "%", FabricCode));
		}else {
			Log.error("Fabric Details are empty");
			Assert.fail("Fabric Details cannot be empty");
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectFitDetails(String Fit){
		
		if(!(Fit.isEmpty()) && HomePage.ProductType.equalsIgnoreCase("Suit")) {
			String FitList[] = Fit.split(";");
			String JacketFitName = FitList[0];
			String TrouserFitName = FitList[1];
			action.threadWait();
			action.Click(linkJacketFit.ReplaceLocator(JacketFitName));
			action.threadWait();
			action.Click(linkTrousersFit.ReplaceLocator(TrouserFitName));
			
		}else if(!(Fit.isEmpty()) && !(HomePage.ProductType.equalsIgnoreCase("Suit"))){
			
			action.threadWait();
			action.Click(linkFitSelect.ReplaceLocator(Fit));
			
		}else {
			Log.error("Fabric Details are empty");
			Assert.fail("Fabric Details cannot be empty");
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectCollarDetails(String Collar){
		if(!(Collar.isEmpty())) {

			action.threadWait();
			action.Click(linkCollarSelect.ReplaceLocator(Collar));
		}else {
			Log.error("Collar Details are empty");
			Assert.fail("Collar Details cannot be empty");
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectCuffDetails(String Cuff){
		if(!(Cuff.isEmpty())) {

			action.threadWait();
			action.Click(linkCuffSelect.ReplaceLocator(Cuff));
		}else {
			Log.error("Cuff Details are empty");
			Assert.fail("Cuff Details cannot be empty");
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectMonogramDetails(String Monogram){
		if(!(Monogram.isEmpty())) {
			
			String MonogramList[] = Monogram.split(";");
			String MonogramLocation = MonogramList[0];
			String MonogramInitails = MonogramList[1];
			action.threadWait();
			action.Click(linkMonogramSelect.ReplaceLocator(MonogramLocation.toUpperCase()));
			action.EnterText(linkMonogramInitials.ReplaceLocator(MonogramLocation.toUpperCase()), MonogramInitails);
			action.Click(linkAddMonogram.ReplaceLocator(MonogramLocation.toUpperCase()));
			
		}else {
			action.Click(linkMonogramSkip);
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectTurnUpDetails(String TurnUp){
		if(!(TurnUp.isEmpty())) {

			action.threadWait();
			action.Click(linkTurnUpSelect.ReplaceLocator(TurnUp));
		}else {
			Log.error("Turn Up Details are empty");
			Assert.fail("Turn Up Details cannot be empty");
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectWaistbandDetails(String Waistband){
		if(!(Waistband.isEmpty())) {

			action.threadWait();
			action.Click(linkWaistbandSelect.ReplaceLocator(Waistband));
		}else {
			Log.error("Waistband Details are empty");
			Assert.fail("Waistband Details cannot be empty");
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectWaistcoatDetails(String Waistcoat){
		if(!(Waistcoat.isEmpty())) {

			action.threadWait();
			action.Click(linkWaistcoatSelect.ReplaceLocator(Waistcoat));
		}else {
			action.Click(linkWaistcoatSkip);
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectAdditionalTrouserDetails(String AdditionalTrouser){
		if(AdditionalTrouser.equalsIgnoreCase("Yes")) {

			action.threadWait();
			action.Click(linkAdditionalTrouserSelect);
		}else {
			action.Click(linkAdditionalTrouserSkip);
		}
		
		
		return this;
	}
	
	public ProductDetailsPage selectSizeDetails(String SizeDetails){
		
		if(!(SizeDetails.isEmpty()) && HomePage.ProductType.equalsIgnoreCase("Suit")) {
			String SizeList[] = SizeDetails.split(";");
			String JacketSizeGroup = SizeList[2];
			String JacketSize = SizeList[3];
			String TrouserSizeGroup = SizeList[0];
			String TrouserSize = SizeList[1];
			action.threadWait();
			action.selectSize(listTrouserSize.ReplaceLocator(TrouserSizeGroup.toLowerCase()), linkTrouserSize, TrouserSize, TrouserSizeGroup.toLowerCase());
			action.threadWait();
			action.selectSize(listJacketSize.ReplaceLocator(JacketSizeGroup.toLowerCase()), linkJacketSize, JacketSize, JacketSizeGroup.toLowerCase());
			
			
		}else if(!(SizeDetails.isEmpty()) && !(HomePage.ProductType.equalsIgnoreCase("Suit"))){
			String SizeList[] = SizeDetails.split(";");
			String SizeGroup = SizeList[0];
			String Size = SizeList[1];
			action.threadWait();
			action.selectSize(listSize.ReplaceLocator(SizeGroup.toLowerCase()), linkSize, Size, SizeGroup.toLowerCase());
			
			
		}else {
			Log.error("Size Details are empty");
			Assert.fail("Size Details cannot be empty");
		}
		return this;
	}
	
	public ProductDetailsPage selectAddToBagButton(){
				
		action.WaitForWebElement(btnAddToBag)
		      .Click(btnAddToBag);
		action.WaitForWebElement(btnSecureCheckout);
		if(!(action.verifyElementPresentinUI(btnSecureCheckout))) {
			Log.error("Add to Bag is not successful");
			Assert.fail("Add to Bag is not successful");
		}else {
			Log.info("Product successfully added to Bag");
		}
		return this;
	}
}
