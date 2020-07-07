import {Config, browser} from "protractor";

export let config:Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/dashboard.feature'],


cucumberOpts: {
        // require step definitions
        require: [
          './stepDefinitions/dashboard.js' // accepts a glob
        ],
        format: 'json:report/cucumber_report.json',
        // tags:'@dashboard or @recentrun',
      }
    };
  
  