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
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filePath_1 = require("../utility/filePath");
let dashboardPageLoc = new propertyfilereader_1.PropertiesFileReader(filePath_1.FilePath.dashBoardPage);
let helper = new commonUtility_1.ElementHelper();
cucumber_1.Given(/^User opens URL "([^"]*)"$/, { timeout: 40000 }, (url) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(url);
    yield protractor_1.browser.waitForAngularEnabled(true);
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.Then(/^Verify whether all the project available on the dashboard page$/, { timeout: 40000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element.all(protractor_1.by.xpath("//*[@class='media-box-heading ng-binding']")).getText().then(function (actualData) {
        console.log("list of project :" + actualData);
        //   var detail=table.rowsHash();
        //             console.log("expec :" + detail.projectlist);
        // expect(actualData).to.be.equals(detail.projectlist);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZmluaXRpb25zL3NhbXBsZWRhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0RTtBQUM1RSwyQ0FBb0Q7QUFFcEQsMkRBQXdEO0FBQ3hELHNFQUFxRTtBQUNyRSxrREFBK0M7QUFHL0MsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLHlDQUFvQixDQUFDLG1CQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFeEUsSUFBSSxNQUFNLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFHakMsZ0JBQUssQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ2xFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtFQUFrRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUV2RyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFVBQVU7UUFFdkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxpQ0FBaUM7UUFHakMsMkRBQTJEO1FBRTNDLHVEQUF1RDtJQUN6RSxDQUFDLENBQUMsQ0FBQztBQUdMLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==