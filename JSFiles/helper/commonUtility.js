"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementHelper = void 0;
const protractor_1 = require("protractor");
class ElementHelper {
    //Element Loctors
    locatortype(locator) {
        var elementObj;
        var arrayLocator = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = protractor_1.element(protractor_1.by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = protractor_1.element(protractor_1.by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = protractor_1.element(protractor_1.by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = protractor_1.element(protractor_1.by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = protractor_1.element(protractor_1.by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = protractor_1.element(protractor_1.by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = protractor_1.element(protractor_1.by.model(arrayLocator[1]));
                break;
            case "BIND":
                elementObj = protractor_1.element(protractor_1.by.exactBinding(arrayLocator[1]));
                break;
            case "ButtonText":
                elementObj = protractor_1.element(protractor_1.by.buttonText(arrayLocator[1]));
                break;
            case "Repeater":
                elementObj = protractor_1.element(protractor_1.by.repeater(arrayLocator[1]));
                break;
            case "Option":
                elementObj = protractor_1.element(protractor_1.by.options(arrayLocator[1]));
                break;
            default:
                elementObj = protractor_1.element(protractor_1.by.xpath(arrayLocator[1]));
        }
        return elementObj;
    }
    // click on the element
    clickOnElement(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.click();
            });
        });
    }
    // get text of the limit//
    getElementText(locator) {
        return this.locatortype(locator).getText; //().then(function(txt:string)
        //    {
        //        return txt;
        //    } ) ;
    }
    getpageTitle() {
        return protractor_1.browser.getTitle().then(function (titleTxt) {
            return titleTxt;
        });
    }
    // scrow down
    scrollToDown(dowPosition) {
        protractor_1.browser.executeScript(`window.scrollTo(0,${dowPosition})`);
    }
}
exports.ElementHelper = ElementHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uVXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2hlbHBlci9jb21tb25VdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE2RztBQUM3RyxNQUFhLGFBQWE7SUFJdEIsaUJBQWlCO0lBQ2pCLFdBQVcsQ0FBQyxPQUFlO1FBQ3ZCLElBQUksVUFBeUIsQ0FBQztRQUM5QixJQUFJLFlBQVksR0FBYSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxRQUFRLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixnQkFBZ0I7WUFDaEIsS0FBSyxJQUFJO2dCQUNMLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDL0MsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNwRCxNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDbEQsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2pELE1BQU07WUFFVjtnQkFDSSxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDdEQ7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBSUQsdUJBQXVCO0lBQ3ZCLGNBQWMsQ0FBQyxPQUFlO1FBQzFCLElBQUksVUFBeUIsQ0FBQztRQUM5QixVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV2QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdELDBCQUEwQjtJQUMxQixjQUFjLENBQUMsT0FBZTtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFBLENBQUEsOEJBQThCO1FBRTFFLE9BQU87UUFDUCxxQkFBcUI7UUFDckIsV0FBVztJQUNYLENBQUM7SUFLRCxZQUFZO1FBR1IsT0FBTyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLFFBQWdCO1lBQ3JELE9BQU8sUUFBUSxDQUFBO1FBR25CLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGFBQWE7SUFDYixZQUFZLENBQUMsV0FBbUI7UUFDNUIsb0JBQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUdBO0FBNUZELHNDQTRGQyJ9