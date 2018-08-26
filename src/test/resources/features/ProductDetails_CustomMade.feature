@DailyRun
Feature: Custom Made Product details page
Description: User should be able to Add to Bag only after providing all product details 
when selecting a custom made product
 
  @CustomMadeSuitTest
  Scenario Outline: Successful submision of Product to Checkout Bag for Custom Made Suit
  ..."""
  If a user selects Custom Made suit, the user should be made to provide all required product details specific to
  Custom Made Suit before the user can Add to Bag
  ..."""
    Given User has selected product "<Type>" from the custom made section in suitsupply website
    When User provides fabric details as "<Fabric Name&Code>"
    And User provides fit details as "<Jacket&Trousers Fit>"
    And User provides turn up details as "<Turn Up>"
    And User provides waistband details as "<Waistband>"
    And User provides waistcoat details as "<Waistcoat>"
    And User provides additional trousers detail as "<Additional Trouser>"
    And User provides size details as "<Trousers&Jacket Size>"
    Then User is able to add the product to bag
   Examples: Details
    | Type | Fabric Name&Code            | Jacket&Trousers Fit             | Turn Up      | Waistband  | Waistcoat | Additional Trouser | Trousers&Jacket Size  |
    | Suit | Grey Plain Wool;586.861/122 | Lazio - Single Breasted;Brescia | With Turn Up | Belt Loops | Capetown  | No                 | Regular;46;Regular;44 |
    
 
  @CustomMadeShirtTest
  Scenario Outline: Successful submision of Product to Checkout Bag for Custom Made Shirt
  ..."""
  If a user selects Custom Made Shirt, the user should be made to provide all required product details specific to
  Custom Made Shirt before the user can Add to Bag
  ..."""
    Given User has selected product "<Type>" from the custom made section in suitsupply website
    When User provides fabric details as "<Fabric Name&Code>"
    And User provides fit details as "<Fit>"
    And User provides collar details as "<Collar>"
    And User provides cuff details as "<Cuff>"
    And User provides monogram details as "<Monogram&Initials>"
    And User provides size details as "<Size>"
    Then User is able to add the product to bag
   Examples: Details
    | Type  | Fabric Name&Code        | Fit      | Collar  | Cuff           | Waistcoat | Monogram&Initials | Size      |
    | Shirt | Blue Linen Stripe;367.2 | Slim Fit | Classic | Single squared | Capetown  | ON FRONT;DM       | Long;39-7 |
 
 @CustomMadeTrousersTest
  Scenario Outline: Successful submision of Product to Checkout Bag for Custom Made Trousers
  ..."""
  If a user selects Custom Made Trousers the user should be made to provide all required product details specific to
  Custom Made Trousers before the user can Add to Bag
  ..."""
    Given User has selected product "<Type>" from the custom made section in suitsupply website
    When User provides fabric details as "<Fabric Name&Code>"
    And User provides fit details as "<Fit>"
    And User provides turn up details as "<Turn Up>"
    And User provides waistband details as "<Waistband>"
    And User provides size details as "<Size>"
    Then User is able to add the product to bag
   Examples: Details
    | Type     | Fabric Name&Code                 | Fit        | Turn Up         | Waistband      | Size      |
    | Trousers | Light Brown Pure Cotton;1982/919 | Washington | Without Turn Up | Side Adjusters | Long;90   |
 
 @CustomMadeJacketTest
  Scenario Outline: Successful submision of Product to Checkout Bag for Custom Made Jacket
  ..."""
  If a user selects Custom Made Jacket the user should be made to provide all required product details specific to
  Custom Made Jacket before the user can Add to Bag
  ..."""
    Given User has selected product "<Type>" from the custom made section in suitsupply website
    When User provides fabric details as "<Fabric Name&Code>"
    And User provides fit details as "<Fit>"
    And User provides size details as "<Size>"
    Then User is able to add the product to bag
   Examples: Details
    | Type   | Fabric Name&Code             | Fit                      | Size       |
    | Jacket | Grey Faux Uni Wool;540.901/4 | Napoli - Single Breasted | Regular;48 |
 
 @CustomMadeWaistcoatTest
  Scenario Outline: Successful submision of Product to Checkout Bag for Custom Made Waistcoat
  ..."""
  If a user selects Custom Made Waistcoat the user should be made to provide all required product details specific to
  Custom Made Waistcoat before the user can Add to Bag
  ..."""
    Given User has selected product "<Type>" from the custom made section in suitsupply website
    When User provides fabric details as "<Fabric Name&Code>"
    And User provides fit details as "<Fit>"
    And User provides size details as "<Size>"
    Then User is able to add the product to bag
   Examples: Details
    | Type      | Fabric Name&Code          | Fit     | Size       |
    | Waistcoat | Blue Plain Wool;595.201/4 | Ferrara | Regular;42 |
      