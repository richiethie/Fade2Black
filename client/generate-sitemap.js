import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Workaround to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sitemap = new SitemapStream({ hostname: 'https://www.fade2blackbarbershop.com' });
const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

sitemap.pipe(writeStream);

// Add your routes here
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/services', changefreq: 'monthly', priority: 0.9 });
sitemap.write({ url: '/book', changefreq: 'weekly', priority: 1.0 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ Sitemap generated at /public/sitemap.xml');
});
