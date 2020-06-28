exports.config = {
  user: '',
  key: '',
  server: 'hub-cloud.browserstack.com',
  browserstack: true,

capabilities: {
    'browserName': 'Safari',
    'browser_version': '13.0',
    'os': 'OS X',
    'os_version': 'Catalina',
    'resolution': '1024x768',
    'project': 'Browserstack integration with Cucumber',
  }
}