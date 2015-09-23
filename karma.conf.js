
module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai','browserify'],

        files: [
        /**
            *Why to include es5-shim?
            *PhantomJS is built with an old version of JavaScriptCore that is missing the "bind" implementation,
            *henceforth we have to include es5-shim [https://github.com/duojs/test/issues/55]
         */
          'node_modules/es5-shim/es5-shim.js',
          'public/test/**/*.js'
        ],

        plugins : [
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-browserify',
            'karma-coverage'
        ],

         preprocessors: {
            'public/test/**/*.js': ['browserify']
        },
        browserify: {
          transform: ['reactify','istanbulify'],
          extensions: ['.js', '.jsx'],
          debug: true,
          bundleDelay: 1000,  // WAR for karma-browserify race condition
        },
        coverageReporter: {
              type : 'html',
              dir : 'coverage/'
        },

        reporters: ['progress','coverage'],

        port: 9876,
        runnerPort: 9100,
        colors: true,
        autoWatch: false,
        singleRun: true,
        captureTimeout: 30000,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS']

    });
};