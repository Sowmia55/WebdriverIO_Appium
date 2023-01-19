//require('dotenv').config()
const { config } = require('./wdio.shared.conf');

//
// ============
// BrowserStack Credentials
// ============
config.user = 'sowmiab_q5oIf4';
config.key = 'Uvj6RSGzkcnFvQ4WQjMo';

//
// ============
// Specs
// ============
config.specs = [
//  path.join(process.cwd(), './test/specs/android/add-note-screen*.js')
'./test/specs/android/amazon.skip.spec.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "10.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://490584f17e0546e03da4798ab525a89dbe6577d0",
    "appium:autoGrantPermissions": true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;