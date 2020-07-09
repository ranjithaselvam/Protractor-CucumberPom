
import { Given, When, Then, After, Before, TableDefinition } from 'cucumber'
import { browser, element, by, $ } from 'protractor'
import { expect } from 'chai'
import { ElementHelper } from '../helper/commonUtility';
import { PropertiesFileReader } from '../utility/propertyfilereader';
import { FilePath } from '../utility/filePath';

import value, * as dashboardloc from 'C:/Users/ranjitha.selvam/Desktop/Atmecs/Locators/dashboardloc.json'
import * as recentrunloc from 'C:/Users/ranjitha.selvam/Desktop/Atmecs/Locators/recentrunloc.json'

let helper = new ElementHelper();
let dashboardPageLoc = new PropertiesFileReader(FilePath.dashBoardPage);


Given(/^User launch the chrome browser$/, { timeout: 40000 }, async function () {
    console.log("Step 1: Browser opening")
    browser.waitForAngularEnabled(true);
    browser.manage().window().maximize();
});

When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, async function (url) {
    await browser.get(url);
    browser.getCurrentUrl().then(function (actualurl) {
        expect(url).to.be.equals(actualurl)
    });

});



Then(/^Page Title should be "([^"]*)"$/, { timeout: 70000 }, async function (expectedtitle) {


    var acttitle = await helper.getpageTitle();
    expect(acttitle).to.be.equals(expectedtitle);
});


When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, async function () {

    await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.link.restapi')).click();

});

When(/^Select status as pass$/, { timeout: 70000 }, async function () {


    await element(by.cssContainingText("option", "Pass")).click();
    // helper.scrollToDown(200);

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

When(/^User click on toggle button$/, { timeout: 100000 }, async function () {

    await helper.locatortype(dashboardPageLoc.propertiesFileData('loc.btn.toggle')).click();
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




