const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://threesam.com');
  await page.screenshot({path: 'threesam.png'});

  await browser.close();
})();