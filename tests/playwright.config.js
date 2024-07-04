// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: true,
  },
  reporter: [
    ['list'], // You can use other built-in reporters like 'dot', 'json', 'html', etc.
    ['html', { outputFolder: 'playwright-report', open: 'never' }] // Configuring HTML report
  ],
});
