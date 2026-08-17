import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { chromium } from 'playwright';

const projectRoot = path.resolve(process.cwd());
const distDir = path.join(projectRoot, 'dist');
const baseUrl = 'http://127.0.0.1:4173';
const routes = [
  '/',
  '/about',
  '/blog',
  '/learn-more/web-creation',
  '/learn-more/it-support',
  '/learn-more/data-analysis',
  '/learn-more/professional-consultancy',
  '/powerbi/sales-dashboard',
  '/powerbi/car-models-dashboard'
];

function waitForServer(url) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tryOnce = () => {
      fetch(url)
        .then(() => resolve())
        .catch(() => {
          if (Date.now() - start > 30000) {
            reject(new Error('Timed out waiting for Vite preview server to start'));
            return;
          }
          setTimeout(tryOnce, 500);
        });
    };
    tryOnce();
  });
}

async function main() {
  const previewArgs = process.platform === 'win32'
    ? ['cmd.exe', ['/c', 'npx vite preview --host 127.0.0.1 --port 4173']]
    : ['npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', '4173']];

  const previewProcess = process.platform === 'win32'
    ? spawn(previewArgs[0], previewArgs[1], {
        cwd: projectRoot,
        stdio: 'ignore',
        shell: false,
        windowsHide: true
      })
    : spawn(previewArgs[0], previewArgs[1], {
        cwd: projectRoot,
        stdio: 'ignore',
        shell: false,
        windowsHide: true
      });

  try {
    await waitForServer(baseUrl);

    const browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
      for (const route of routes) {
        const page = await browser.newPage();
        await page.goto(`${baseUrl}${route}`, {
          waitUntil: 'networkidle',
          timeout: 60000
        });

        const html = await page.content();
        const outputPath = route === '/'
          ? path.join(distDir, 'index.html')
          : path.join(distDir, route.replace(/^\//, ''), 'index.html');

        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, html, 'utf8');
        await page.close();
      }
    } finally {
      await browser.close();
    }
  } finally {
    previewProcess.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error('Prerender failed:', error);
  process.exit(1);
});
