'use strict';
//   const VisualReview = require('visualreview-protractor');
// let vr = new VisualReview({
//   hostname: 'localhost',
//   port: 7000,
//
//   propertiesFn: function (capabilities) {
//     return {
//       'os': capabilities.platform,
//       'browser': capabilities.browserName,
//       'version': capabilities.version
//     };
//   }
// });

exports.config = {
  directConnect: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false,

  specs: [
    'features/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--disable-extensions']
    }
  },

  cucumberOpts: {
    require: [
      'features/step_definitions/*.js',
      'features/helpers/hooks.js'
    ],
    tags: '@ok',
    format: ['json:results.json', 'pretty'],
    profile: false,
    'no-source': true
  },

  beforeLaunch: function() {
    //return vr.initRun('lojaintegrada', 'steps');
    setTimeout(function() {
        browser.driver.executeScript(function() {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            };
        }).then(function(result) {
            browser.driver.manage().window().setSize(result.width, result.height);
        });
    });

  },

  onPrepare: function() {
    browser.ignoreSynchronization=true;
  },

  afterLaunch: function(exitCode) {
    // return vr.cleanup(exitCode);
    var reporter = require('cucumber-html-reporter');

    var options = {
          theme: 'bootstrap',
          jsonFile: 'results.json',
          output: 'cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"0.0.1",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "OSX",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };

      reporter.generate(options);

  },

  // params: {
  // visualreview: vr
  // },

};
