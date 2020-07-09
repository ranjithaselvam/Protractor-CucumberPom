"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filePath_1 = require("../utility/filePath");
let helper = new commonUtility_1.ElementHelper();
let dashboardPageLoc = new propertyfilereader_1.PropertiesFileReader(filePath_1.FilePath.dashBoardPage);
cucumber_1.Given(/^User launch the chrome browser$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step 1: Browser opening");
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url);
        protractor_1.browser.getCurrentUrl().then(function (actualurl) {
            chai_1.expect(url).to.be.equals(actualurl);
        });
    });
});
cucumber_1.Then(/^Page Title should be "([^"]*)"$/, { timeout: 70000 }, function (expectedtitle) {
    return __awaiter(this, void 0, void 0, function* () {
        var acttitle = yield helper.getpageTitle();
        chai_1.expect(acttitle).to.be.equals(expectedtitle);
    });
});
cucumber_1.When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.link.restapi')).click();
    });
});
cucumber_1.When(/^Select status as pass$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.cssContainingText("option", "Pass")).click();
        // helper.scrollToDown(200);
    });
});
// Then(/^Able to get pass test cases$/, { timeout: 70000 }, async function (table:TableDefinition) {
//     var actualdata:string[];
//     var assertvalue:string[];
//    await  helper.getElementText(dashboardPageLoc.propertiesFileData('loc.txt.passtestcase')).then(function (passStatus) {
//         actualdata=passStatus.split("\n");
//          assertvalue=actualdata[3].split(" ");
//         console.log(assertvalue[0]);
//     });
//     var detail = table.raw();
//         detail.forEach(function (value) {
//             console.log("expec :" + value[0]);
//             expect(assertvalue[0]).to.be.equals(value[0]);
//         });
// });
cucumber_1.When(/^User click on toggle button$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.btn.toggle')).click();
    });
});
// Then(/^User can able to view test status$/, { timeout: 100000 }, async function () {
//     // 	var actualtest =	await element(by.xpath((<any>dashboardloc).totaltest)).getText();
//     var actualtest=  helper.getElementText(dashboardPageLoc.propertiesFileData('loc.txt.totaltest'));
//     var actualpass=  helper.getElementText(dashboardPageLoc.propertiesFileData('loc.txt.passtest'));
//     var actualfail =helper.getElementText(dashboardPageLoc.propertiesFileData('loc.txt.failtest'));
//     var actualskip= helper.getElementText(dashboardPageLoc.propertiesFileData('loc.txt.skiptest'));
//    var actualpass=await element(by.xpath((<any>dashboardloc).passtest)).getText();
//    var actualfail=await element(by.xpath((<any>dashboardloc).failtest)).getText();
//    var actualskip=await element(by.xpath((<any>dashboardloc).skiptest)).getText();
//      var expected=table.rowsHash();
//   expect(actualtest).to.be.equals(expected.testrun);
//   expect(actualpass).to.be.equals(expected.pass);
//   expect(actualfail).to.be.equals(expected.fail);
//   expect(actualskip).to.be.equals(expected.skip);
// });
// /*SCENARIO :2 */
// When(/^Click on recent run$/,  { timeout: 100000 }, async function () {
//     await element(by.css((<any>recentrunloc).recentrun)).click();
// });
// When(/^Select product$/,  { timeout: 100000 }, async function () {
//     await element(by.xpath((<any>recentrunloc).product)).click();
// });
// When(/^Select test case$/,  { timeout: 100000 }, async function () {
//     await element(by.xpath((<any>recentrunloc).testcase)).click();
// });
// Then(/^User can view the tesct case details$/,  { timeout: 100000 }, async function () {
//  var status=   await element(by.css((<any>recentrunloc).testdetails)).getText();
// 	console.log("Status :"+status);
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUE0RTtBQUM1RSwyQ0FBb0Q7QUFDcEQsK0JBQTZCO0FBQzdCLDJEQUF3RDtBQUN4RCxzRUFBcUU7QUFDckUsa0RBQStDO0FBSy9DLElBQUksTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ2pDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBb0IsQ0FBQyxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR3hFLGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUN0QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFnQixHQUFHOztRQUN0RSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsU0FBUztZQUM1QyxhQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQWdCLGFBQWE7O1FBR3RGLElBQUksUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLGFBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLGdEQUFnRCxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFOztRQUV2RSxNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTlGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBR2hELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUQsNEJBQTRCO0lBRWhDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFJSCxxR0FBcUc7QUFFckcsK0JBQStCO0FBQy9CLGdDQUFnQztBQUNoQyw0SEFBNEg7QUFFNUgsNkNBQTZDO0FBQzdDLGlEQUFpRDtBQUNqRCx1Q0FBdUM7QUFFdkMsVUFBVTtBQUNWLGdDQUFnQztBQUVoQyw0Q0FBNEM7QUFFNUMsaURBQWlEO0FBQ2pELDZEQUE2RDtBQUU3RCxjQUFjO0FBVWQsTUFBTTtBQUVOLGVBQUksQ0FBQywrQkFBK0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFFdkQsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1RixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBT0gsdUZBQXVGO0FBR3ZGLDZGQUE2RjtBQUM3Rix3R0FBd0c7QUFFeEcsdUdBQXVHO0FBQ3ZHLHNHQUFzRztBQUN0RyxzR0FBc0c7QUFHbEcscUZBQXFGO0FBRXJGLHFGQUFxRjtBQUVyRixxRkFBcUY7QUFJckYsc0NBQXNDO0FBRXRDLHVEQUF1RDtBQUN2RCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUd4RCxNQUFNO0FBRU4sbUJBQW1CO0FBRW5CLDBFQUEwRTtBQUMxRSxvRUFBb0U7QUFDcEUsTUFBTTtBQUdOLHFFQUFxRTtBQUNyRSxvRUFBb0U7QUFFcEUsTUFBTTtBQUNOLHVFQUF1RTtBQUV2RSxxRUFBcUU7QUFDckUsTUFBTTtBQUVOLDJGQUEyRjtBQUMzRixtRkFBbUY7QUFDbkYsbUNBQW1DO0FBQ25DLE1BQU0ifQ==