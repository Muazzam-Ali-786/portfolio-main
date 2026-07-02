const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const outputDir = 'd:/portfolio-imgs';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const projects = [
  { name: 'cybervol',        url: 'https://www.cybervol.com' },
  { name: 'medium-clone',    url: 'https://medium-clone-blog-ivory.vercel.app' },
  { name: 'multi-signup',    url: 'https://multi-signup-form.vercel.app' },
  { name: 'time-app',        url: 'https://time-app-chi.vercel.app' },
  { name: 'diary-app',       url: 'https://diary-app-zeta-teal.vercel.app' },
  { name: 'ecommerce',       url: 'https://handless-e-comerce-site.vercel.app' },
  { name: 'shoe-store',      url: 'https://shoe-store-beta-eight.vercel.app' },
  { name: 'extense-tracker', url: 'https://extense-tracker.vercel.app' },
  { name: 'chat-app',        url: 'https://zync-private-chat-app.vercel.app' },
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
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
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
