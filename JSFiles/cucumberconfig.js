"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/sampledashboard.feature'],
    cucumberOpts: {
        // require step definitions
        require: [
            './stepdefinitions/sampledashboard.js'
        ],
        format: 'json:report/cucumber_report.json',
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLVyxRQUFBLE1BQU0sR0FBVTtJQUN2Qiw0Q0FBNEM7SUFDNUMsbURBQW1EO0lBQ25ELGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLHFDQUFxQyxDQUFDO0lBS2xELFlBQVksRUFBRTtRQUNOLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCxzQ0FBc0M7U0FDdkM7UUFDRCxNQUFNLEVBQUUsa0NBQWtDO0tBRTNDO0NBQ0YsQ0FBQyJ9