import {Config, browser} from "protractor";




export let config:Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseURL:'http://10.10.10.231:8082/#/app/dashboard',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/sampledashboard.feature'],

    onPrepare: () => {
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
     
  },


cucumberOpts: {
        // require step definitions
        require: [
          './stepdefinitions/sampledashboard.js'  ,'./support/hooks.js' 
        ],
        format: 'json:report/cucumber_report.json',
        // tags:'@dashboard or @recentrun',
      },
      
    };
  
  