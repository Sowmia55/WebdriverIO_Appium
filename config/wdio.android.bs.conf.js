//require('dotenv').config()
const { config } = require('./wdio.shared.conf');

//
// ============
// BrowserStack Credentials
// ============
config.user = 'sowmiab_HEMZIS';
config.key = 'ZjUCdNrqDKSspLU2qm3b';

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
    "appium:app": "bs://74254bec3dfac265fe9b9dbaa980aba13722f12f",
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