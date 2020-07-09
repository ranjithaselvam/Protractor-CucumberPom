const { BeforeAll, After, AfterAll, Status } = require("cucumber");
const {Status} = require("cucumber");
import { browser } from "protractor";
import { config } from "./cucumberconfig.ts";

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.close();
});














