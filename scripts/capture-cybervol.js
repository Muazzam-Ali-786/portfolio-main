const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
  try {
    console.log('Capturing cybervol...');
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto('https://www.cybervol.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await new Promise(r => setTimeout(r, 4000));
    await page.screenshot({ path: 'd:/portfolio-imgs/cybervol.png', type: 'png' });
    await page.close();
    console.log('OK: cybervol');
  } catch (e) {
    console.log('FAIL: cybervol -', e.message);
  }
  await browser.close();
})();
