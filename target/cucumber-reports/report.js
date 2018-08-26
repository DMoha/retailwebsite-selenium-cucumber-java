$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ProductDetails_CustomMade.feature");
formatter.feature({
  "line": 2,
  "name": "Custom Made Product details page",
  "description": "Description: User should be able to Add to Bag only after providing all product details \r\nwhen selecting a custom made product",
  "id": "custom-made-product-details-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DailyRun"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Suit",
  "description": "...\"\"\"\r\nIf a user selects Custom Made suit, the user should be made to provide all required product details specific to\r\nCustom Made Suit before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-suit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@CustomMadeSuitTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User has selected product \"\u003cType\u003e\" from the custom made section in suitsupply website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User provides fabric details as \"\u003cFabric Name\u0026Code\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User provides fit details as \"\u003cJacket\u0026Trousers Fit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User provides turn up details as \"\u003cTurn Up\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User provides waistband details as \"\u003cWaistband\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User provides waistcoat details as \"\u003cWaistcoat\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User provides additional trousers detail as \"\u003cAdditional Trouser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User provides size details as \"\u003cTrousers\u0026Jacket Size\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "Details",
  "description": "",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-suit;details",
  "rows": [
    {
      "cells": [
        "Type",
        "Fabric Name\u0026Code",
        "Jacket\u0026Trousers Fit",
        "Turn Up",
        "Waistband",
        "Waistcoat",
        "Additional Trouser",
        "Trousers\u0026Jacket Size"
      ],
      "line": 22,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-suit;details;1"
    },
    {
      "cells": [
        "Suit",
        "Grey Plain Wool;586.861/122",
        "Lazio - Single Breasted;Brescia",
        "With Turn Up",
        "Belt Loops",
        "Capetown",
        "No",
        "Regular;46;Regular;44"
      ],
      "line": 23,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-suit;details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7806755211,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Suit",
  "description": "...\"\"\"\r\nIf a user selects Custom Made suit, the user should be made to provide all required product details specific to\r\nCustom Made Suit before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-suit;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DailyRun"
    },
    {
      "line": 6,
      "name": "@CustomMadeSuitTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User has selected product \"Suit\" from the custom made section in suitsupply website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User provides fabric details as \"Grey Plain Wool;586.861/122\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User provides fit details as \"Lazio - Single Breasted;Brescia\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User provides turn up details as \"With Turn Up\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User provides waistband details as \"Belt Loops\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User provides waistcoat details as \"Capetown\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User provides additional trousers detail as \"No\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User provides size details as \"Regular;46;Regular;44\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Suit",
      "offset": 27
    }
  ],
  "location": "ProductDetailsSteps.user_has_selected_product_from_the_custom_made_section_in_suitsupply_website(String)"
});
formatter.result({
  "duration": 9947286572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grey Plain Wool;586.861/122",
      "offset": 33
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fabric_details_as(String)"
});
formatter.result({
  "duration": 5248986821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lazio - Single Breasted;Brescia",
      "offset": 30
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fit_details_as(String)"
});
formatter.result({
  "duration": 10381140543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "With Turn Up",
      "offset": 34
    }
  ],
  "location": "ProductDetailsSteps.user_provides_turn_up_details_as(String)"
});
formatter.result({
  "duration": 5323650604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Belt Loops",
      "offset": 36
    }
  ],
  "location": "ProductDetailsSteps.user_provides_waistband_details_as(String)"
});
formatter.result({
  "duration": 5165721390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Capetown",
      "offset": 36
    }
  ],
  "location": "ProductDetailsSteps.user_provides_waistcoat_details_as(String)"
});
formatter.result({
  "duration": 5213319166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 45
    }
  ],
  "location": "ProductDetailsSteps.user_provides_additional_trousers_detail_as(String)"
});
formatter.result({
  "duration": 765846068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regular;46;Regular;44",
      "offset": 31
    }
  ],
  "location": "ProductDetailsSteps.user_provides_size_details_as(String)"
});
formatter.result({
  "duration": 10575365267,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailsSteps.user_is_able_to_add_the_product_to_bag()"
});
formatter.result({
  "duration": 1700559491,
  "status": "passed"
});
formatter.after({
  "duration": 1464078884,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Shirt",
  "description": "...\"\"\"\r\nIf a user selects Custom Made Shirt, the user should be made to provide all required product details specific to\r\nCustom Made Shirt before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-shirt",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@CustomMadeShirtTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User has selected product \"\u003cType\u003e\" from the custom made section in suitsupply website",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User provides fabric details as \"\u003cFabric Name\u0026Code\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User provides fit details as \"\u003cFit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User provides collar details as \"\u003cCollar\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User provides cuff details as \"\u003cCuff\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User provides monogram details as \"\u003cMonogram\u0026Initials\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User provides size details as \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "Details",
  "description": "",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-shirt;details",
  "rows": [
    {
      "cells": [
        "Type",
        "Fabric Name\u0026Code",
        "Fit",
        "Collar",
        "Cuff",
        "Waistcoat",
        "Monogram\u0026Initials",
        "Size"
      ],
      "line": 41,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-shirt;details;1"
    },
    {
      "cells": [
        "Shirt",
        "Blue Linen Stripe;367.2",
        "Slim Fit",
        "Classic",
        "Single squared",
        "Capetown",
        "ON FRONT;DM",
        "Long;39-7"
      ],
      "line": 42,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-shirt;details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5452414271,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Shirt",
  "description": "...\"\"\"\r\nIf a user selects Custom Made Shirt, the user should be made to provide all required product details specific to\r\nCustom Made Shirt before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-shirt;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@CustomMadeShirtTest"
    },
    {
      "line": 1,
      "name": "@DailyRun"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User has selected product \"Shirt\" from the custom made section in suitsupply website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User provides fabric details as \"Blue Linen Stripe;367.2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User provides fit details as \"Slim Fit\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User provides collar details as \"Classic\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User provides cuff details as \"Single squared\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User provides monogram details as \"ON FRONT;DM\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User provides size details as \"Long;39-7\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirt",
      "offset": 27
    }
  ],
  "location": "ProductDetailsSteps.user_has_selected_product_from_the_custom_made_section_in_suitsupply_website(String)"
});
formatter.result({
  "duration": 13226776756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue Linen Stripe;367.2",
      "offset": 33
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fabric_details_as(String)"
});
formatter.result({
  "duration": 5272523546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Slim Fit",
      "offset": 30
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fit_details_as(String)"
});
formatter.result({
  "duration": 5247570914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Classic",
      "offset": 33
    }
  ],
  "location": "ProductDetailsSteps.user_provides_collar_details_as(String)"
});
formatter.result({
  "duration": 5233355616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single squared",
      "offset": 31
    }
  ],
  "location": "ProductDetailsSteps.user_provides_cuff_details_as(String)"
});
formatter.result({
  "duration": 5178281152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ON FRONT;DM",
      "offset": 35
    }
  ],
  "location": "ProductDetailsSteps.user_provides_monogram_details_as(String)"
});
formatter.result({
  "duration": 5546823111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Long;39-7",
      "offset": 31
    }
  ],
  "location": "ProductDetailsSteps.user_provides_size_details_as(String)"
});
formatter.result({
  "duration": 5332908665,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailsSteps.user_is_able_to_add_the_product_to_bag()"
});
formatter.result({
  "duration": 2451747594,
  "status": "passed"
});
formatter.after({
  "duration": 2741741731,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Trousers",
  "description": "...\"\"\"\r\nIf a user selects Custom Made Trousers the user should be made to provide all required product details specific to\r\nCustom Made Trousers before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-trousers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@CustomMadeTrousersTest"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User has selected product \"\u003cType\u003e\" from the custom made section in suitsupply website",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User provides fabric details as \"\u003cFabric Name\u0026Code\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User provides fit details as \"\u003cFit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User provides turn up details as \"\u003cTurn Up\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User provides waistband details as \"\u003cWaistband\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User provides size details as \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.examples({
  "line": 57,
  "name": "Details",
  "description": "",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-trousers;details",
  "rows": [
    {
      "cells": [
        "Type",
        "Fabric Name\u0026Code",
        "Fit",
        "Turn Up",
        "Waistband",
        "Size"
      ],
      "line": 58,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-trousers;details;1"
    },
    {
      "cells": [
        "Trousers",
        "Light Brown Pure Cotton;1982/919",
        "Washington",
        "Without Turn Up",
        "Side Adjusters",
        "Long;90"
      ],
      "line": 59,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-trousers;details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5994591171,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Trousers",
  "description": "...\"\"\"\r\nIf a user selects Custom Made Trousers the user should be made to provide all required product details specific to\r\nCustom Made Trousers before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-trousers;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@CustomMadeTrousersTest"
    },
    {
      "line": 1,
      "name": "@DailyRun"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User has selected product \"Trousers\" from the custom made section in suitsupply website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User provides fabric details as \"Light Brown Pure Cotton;1982/919\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User provides fit details as \"Washington\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User provides turn up details as \"Without Turn Up\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User provides waistband details as \"Side Adjusters\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User provides size details as \"Long;90\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Trousers",
      "offset": 27
    }
  ],
  "location": "ProductDetailsSteps.user_has_selected_product_from_the_custom_made_section_in_suitsupply_website(String)"
});
formatter.result({
  "duration": 9903432716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Light Brown Pure Cotton;1982/919",
      "offset": 33
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fabric_details_as(String)"
});
formatter.result({
  "duration": 5370562516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Washington",
      "offset": 30
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fit_details_as(String)"
});
formatter.result({
  "duration": 5424945760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Without Turn Up",
      "offset": 34
    }
  ],
  "location": "ProductDetailsSteps.user_provides_turn_up_details_as(String)"
});
formatter.result({
  "duration": 5234650592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Side Adjusters",
      "offset": 36
    }
  ],
  "location": "ProductDetailsSteps.user_provides_waistband_details_as(String)"
});
formatter.result({
  "duration": 5204219520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Long;90",
      "offset": 31
    }
  ],
  "location": "ProductDetailsSteps.user_provides_size_details_as(String)"
});
formatter.result({
  "duration": 5293353849,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailsSteps.user_is_able_to_add_the_product_to_bag()"
});
formatter.result({
  "duration": 2803678860,
  "status": "passed"
});
formatter.after({
  "duration": 2695148432,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Jacket",
  "description": "...\"\"\"\r\nIf a user selects Custom Made Jacket the user should be made to provide all required product details specific to\r\nCustom Made Jacket before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-jacket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@CustomMadeJacketTest"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "User has selected product \"\u003cType\u003e\" from the custom made section in suitsupply website",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "User provides fabric details as \"\u003cFabric Name\u0026Code\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User provides fit details as \"\u003cFit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User provides size details as \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "Details",
  "description": "",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-jacket;details",
  "rows": [
    {
      "cells": [
        "Type",
        "Fabric Name\u0026Code",
        "Fit",
        "Size"
      ],
      "line": 73,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-jacket;details;1"
    },
    {
      "cells": [
        "Jacket",
        "Grey Faux Uni Wool;540.901/4",
        "Napoli - Single Breasted",
        "Regular;48"
      ],
      "line": 74,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-jacket;details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6142650089,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Jacket",
  "description": "...\"\"\"\r\nIf a user selects Custom Made Jacket the user should be made to provide all required product details specific to\r\nCustom Made Jacket before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-jacket;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DailyRun"
    },
    {
      "line": 61,
      "name": "@CustomMadeJacketTest"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "User has selected product \"Jacket\" from the custom made section in suitsupply website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "User provides fabric details as \"Grey Faux Uni Wool;540.901/4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User provides fit details as \"Napoli - Single Breasted\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User provides size details as \"Regular;48\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Jacket",
      "offset": 27
    }
  ],
  "location": "ProductDetailsSteps.user_has_selected_product_from_the_custom_made_section_in_suitsupply_website(String)"
});
formatter.result({
  "duration": 12335320571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grey Faux Uni Wool;540.901/4",
      "offset": 33
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fabric_details_as(String)"
});
formatter.result({
  "duration": 5356257524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Napoli - Single Breasted",
      "offset": 30
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fit_details_as(String)"
});
formatter.result({
  "duration": 5232876358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regular;48",
      "offset": 31
    }
  ],
  "location": "ProductDetailsSteps.user_provides_size_details_as(String)"
});
formatter.result({
  "duration": 5329088438,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailsSteps.user_is_able_to_add_the_product_to_bag()"
});
formatter.result({
  "duration": 1776517805,
  "status": "passed"
});
formatter.after({
  "duration": 2849491246,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Waistcoat",
  "description": "...\"\"\"\r\nIf a user selects Custom Made Waistcoat the user should be made to provide all required product details specific to\r\nCustom Made Waistcoat before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-waistcoat",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@CustomMadeWaistcoatTest"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "User has selected product \"\u003cType\u003e\" from the custom made section in suitsupply website",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "User provides fabric details as \"\u003cFabric Name\u0026Code\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "User provides fit details as \"\u003cFit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User provides size details as \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.examples({
  "line": 87,
  "name": "Details",
  "description": "",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-waistcoat;details",
  "rows": [
    {
      "cells": [
        "Type",
        "Fabric Name\u0026Code",
        "Fit",
        "Size"
      ],
      "line": 88,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-waistcoat;details;1"
    },
    {
      "cells": [
        "Waistcoat",
        "Blue Plain Wool;595.201/4",
        "Ferrara",
        "Regular;42"
      ],
      "line": 89,
      "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-waistcoat;details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5988588403,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Successful submision of Product to Checkout Bag for Custom Made Waistcoat",
  "description": "...\"\"\"\r\nIf a user selects Custom Made Waistcoat the user should be made to provide all required product details specific to\r\nCustom Made Waistcoat before the user can Add to Bag\r\n...\"\"\"",
  "id": "custom-made-product-details-page;successful-submision-of-product-to-checkout-bag-for-custom-made-waistcoat;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DailyRun"
    },
    {
      "line": 76,
      "name": "@CustomMadeWaistcoatTest"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "User has selected product \"Waistcoat\" from the custom made section in suitsupply website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "User provides fabric details as \"Blue Plain Wool;595.201/4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "User provides fit details as \"Ferrara\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User provides size details as \"Regular;42\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User is able to add the product to bag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Waistcoat",
      "offset": 27
    }
  ],
  "location": "ProductDetailsSteps.user_has_selected_product_from_the_custom_made_section_in_suitsupply_website(String)"
});
formatter.result({
  "duration": 9488637936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue Plain Wool;595.201/4",
      "offset": 33
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fabric_details_as(String)"
});
formatter.result({
  "duration": 5243627525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ferrara",
      "offset": 30
    }
  ],
  "location": "ProductDetailsSteps.user_provides_fit_details_as(String)"
});
formatter.result({
  "duration": 5233859416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regular;42",
      "offset": 31
    }
  ],
  "location": "ProductDetailsSteps.user_provides_size_details_as(String)"
});
formatter.result({
  "duration": 5378535863,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailsSteps.user_is_able_to_add_the_product_to_bag()"
});
formatter.result({
  "duration": 1819034737,
  "status": "passed"
});
formatter.after({
  "duration": 2826907236,
  "status": "passed"
});
});