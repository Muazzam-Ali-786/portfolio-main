const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const outputDir = 'd:/portfolio-imgs';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const projects = [
  { name: 'quiz-master',   url: 'https://my-app-malik-muazzams-projects.vercel.app' },
  { name: 'exptense-tracker', url: 'https://exptense-tracker.vercel.app' }
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const { name, url } of projects) {
    const outPath = path.join(outputDir, `${name}.png`);
    try {
      console.log(`Capturing ${name}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 720 });
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
      await page.screenshot({ path: outPath, type: 'png' });
      await page.close();
      console.log(`OK: ${name}`);
    } catch (e) {
      console.log(`FAIL: ${name} - ${e.message}`);
    }
  }

  await browser.close();
  console.log('Done!');
})();
