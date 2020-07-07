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
// When(/^Select status as pass$/,{ timeout: 70000 }, async function () {
//     // await  element(by.xpath((<any>dashboardloc).status)).$((<any>dashboardloc).pass).click();
//  helper.locatortype(dashboardPageLoc.propertiesFileData('loc.filter.status')).$('loc.filter.pass').click();
// });
// Then(/^Able to get pass test cases$/,{ timeout: 70000 }, async function (table:TableDefinition) {
//     var status= await element(by.css((<any>dashboardloc).passtestcase)).getText();
//     // helpers.getTtitle(element(by.css((<any>dashboardloc).passtestcase)));
//     console.log(status);
//     var detail=table.raw();
//         detail.forEach(function(value)
//         {
//             console.log("expec :"+value);
//             // expect(detail).to.be.equals(value)
//         });
//     //expect(status).to.be.equals(detail.Test Case Name );
// });
cucumber_1.When(/^User click on toggle button$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield helper.locatortype(dashboardPageLoc.propertiesFileData('loc.btn.toggle')).click();
    });
});
cucumber_1.Then(/^User can able to view test status$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        // 	var actualtest =	await element(by.xpath((<any>dashboardloc).totaltest)).getText();
        var testcase = helper.getElementText(dashboardPageLoc.propertiesFileData('loc.txt.totaltest'));
        console.log("xxxx :" + testcase);
        chai_1.expect(testcase).to.be.equals('10 TEST(S)');
        //    var actualpass=await element(by.xpath((<any>dashboardloc).passtest)).getText();
        //    var actualfail=await element(by.xpath((<any>dashboardloc).failtest)).getText();
        //    var actualskip=await element(by.xpath((<any>dashboardloc).skiptest)).getText();
        // //    var rows=table.hashes();
        // //    _.each(rows,function(row:any)
        // //     {
        // //       console.log(row.status+" "+row.details)
        // //      })
        //      var expected=table.rowsHash()
        //   expect(actualtest).to.be.equals(expected.testrun);
        //   expect(actualpass).to.be.equals(expected.pass);
        //   expect(actualfail).to.be.equals(expected.fail);
        //   expect(actualskip).to.be.equals(expected.skip);
        // // expect(pass1).to.be.equals(row.pass)
        // // expect(fail1).to.be.equals(row.fail)
        // // expect(skip1).to.be.equals(row.skip)
    });
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUE0RTtBQUM1RSwyQ0FBb0Q7QUFDcEQsK0JBQTZCO0FBQzdCLDJEQUF3RDtBQUN4RCxzRUFBcUU7QUFDckUsa0RBQStDO0FBQy9DLElBQUksTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ2pDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSx5Q0FBb0IsQ0FBQyxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR3hFLGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUN0QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFnQixHQUFHOztRQUN0RSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsU0FBUztZQUM1QyxhQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQWdCLGFBQWE7O1FBR3RGLElBQUksUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLGFBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLGdEQUFnRCxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFOztRQUV2RSxNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTlGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCx5RUFBeUU7QUFFekUsbUdBQW1HO0FBQ25HLDhHQUE4RztBQUM5RyxNQUFNO0FBSU4sb0dBQW9HO0FBRXBHLHFGQUFxRjtBQUNyRiwrRUFBK0U7QUFDL0UsMkJBQTJCO0FBQzNCLDhCQUE4QjtBQUU5Qix5Q0FBeUM7QUFDekMsWUFBWTtBQUVaLDRDQUE0QztBQUM1QyxvREFBb0Q7QUFDcEQsY0FBYztBQUdkLDZEQUE2RDtBQU03RCxNQUFNO0FBRU4sZUFBSSxDQUFDLCtCQUErQixFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUV4RCxNQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFPSCxlQUFJLENBQUMscUNBQXFDLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBR2hFLHNGQUFzRjtRQUNuRixJQUFJLFFBQVEsR0FBRSxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5QixhQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDOUMscUZBQXFGO1FBRXJGLHFGQUFxRjtRQUVyRixxRkFBcUY7UUFJckYsaUNBQWlDO1FBQ2pDLHNDQUFzQztRQUN0QyxXQUFXO1FBQ1gsbURBQW1EO1FBQ25ELGFBQWE7UUFDYixxQ0FBcUM7UUFFckMsdURBQXVEO1FBQ3ZELG9EQUFvRDtRQUNwRCxvREFBb0Q7UUFDcEQsb0RBQW9EO1FBRXBELDBDQUEwQztRQUMxQywwQ0FBMEM7UUFDMUMsMENBQTBDO0lBRTFDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxtQkFBbUI7QUFFbkIsMEVBQTBFO0FBQzFFLG9FQUFvRTtBQUNwRSxNQUFNO0FBR04scUVBQXFFO0FBQ3JFLG9FQUFvRTtBQUVwRSxNQUFNO0FBQ04sdUVBQXVFO0FBRXZFLHFFQUFxRTtBQUNyRSxNQUFNO0FBRU4sMkZBQTJGO0FBQzNGLG1GQUFtRjtBQUNuRixtQ0FBbUM7QUFDbkMsTUFBTSJ9