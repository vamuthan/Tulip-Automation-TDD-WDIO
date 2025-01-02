const { browser } = require('@wdio/globals')
const isLambdaTest = process.env.LAMBDATEST === 'true';
const browserName = process.env.BROWSER || 'chrome';

exports.config = {
    runner: 'local',
    services: isLambdaTest
        ? [
            [
                'lambdatest',
                {
                    tunnel: false,
                    lambdatestOpts: {
                        logFile: 'tunnel.log',
                    },
                },
            ],
        ]
        : [],
    user: isLambdaTest ? process.env.LT_USERNAME : undefined,
    key: isLambdaTest ? process.env.LT_PASSWORD : undefined,
    specs: [
        'test\\specs\\com.tulip\\L1Menu\\companyOption\\companyOptionTest.js',
        'test\\specs\\com.tulip\\L1Menu\\customersOption\\customersOptionTest.js',
        'test\\specs\\com.tulip\\L1Menu\\ecoSystemsOption\\ecoSystemsOptionTest.js',
        'test\\specs\\com.tulip\\L1Menu\\resourcesOption\\brochurePageTest.js',
        'test\\specs\\com.tulip\\L1Menu\\resourcesOption\\resourcesOptionTest.js'
    ],
    maxInstances: 1,
    capabilities: isLambdaTest ? [{
        browserName: browserName,
        ' LT:Options': {
            username: process.env.LT_USERNAME,
		    accessKey: process.env.LT_PASSWORD,
            platform: process.env.PLATFORM || 'Windows 10', 
            browserVersion: process.env.BROWSER_VERSION || 'latest', 
            screenResolution: process.env.SCREEN_RESOLUTION || '1920x1080', 
            build: process.env.BUILD_NAME || 'Local Build', 
            name: process.env.TEST_NAME || 'LambdaTest Test', 
            console: true,
            network: true,
            video: true,
            visual: true,
            "w3c": true,
            "plugin": "node_js-webdriverio",
        },
    }] : [{
        browserName: 'chrome',
        'goog:chromeOptions': {
                args: ['--start-maximized']
        }
    },
    {
        browserName: 'firefox',
    },
    {
        browserName: 'edge',
        'ms:edgeOptions': {
        args: ['--start-maximized']
    }
    }].filter(cap => cap.browserName === browserName),
    logLevel: 'info',
    coloredLogs: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    hostname: isLambdaTest ? 'hub.lambdatest.com' : undefined,
    port: isLambdaTest ? 80 : undefined,
    path: isLambdaTest ? '/wd/hub' : undefined,
    framework: 'mocha',
    reporters: ['spec', 'allure'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeSuite: async function (){
        await browser.maximizeWindow();
        await browser.url("https://www.tulip.com");
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await this.closeInactiveWindows();
        await browser.url("https://www.tulip.com");
    },
    closeInactiveWindows: async function(){
        const activeWindowHandle = await browser.getWindowHandle();
        const windowHandleContainer = await browser.getWindowHandles();
        for(const currentWindowHandle of windowHandleContainer){
            if(currentWindowHandle !== activeWindowHandle){
                await browser.switchToWindow(currentWindowHandle);
                await browser.closeWindow();
            }
        }
        await browser.switchToWindow(activeWindowHandle);
    }
}
