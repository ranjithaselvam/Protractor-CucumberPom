import { Given, When, Then, After, Before, TableDefinition } from 'cucumber'
import { browser, element, by, $ } from 'protractor'
import { expect } from 'chai'
import { ElementHelper } from '../helper/commonUtility';
import { PropertiesFileReader } from '../utility/propertyfilereader';
import { FilePath } from '../utility/filePath';
import value from '*.json';

let dashboardPageLoc = new PropertiesFileReader(FilePath.dashBoardPage);

let helper = new ElementHelper();


Given(/^User opens URL "([^"]*)"$/, { timeout: 40000 }, async (url) => {
    await browser.get(url);
    await browser.waitForAngularEnabled(true);
    await browser.manage().window().maximize();
});

Then(/^Verify whether all the project available on the dashboard page$/, { timeout: 40000 }, async () => {
    
 await element.all(by.xpath("//*[@class='media-box-heading ng-binding']")).getText().then(function(actualData)
  {
      console.log("list of project :"+actualData);
    //   var detail=table.rowsHash();
     

    //             console.log("expec :" + detail.projectlist);
               
                    // expect(actualData).to.be.equals(detail.projectlist);
  });
   
  
});
