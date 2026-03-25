import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sitemapPath = resolve(__dirname, '../public/sitemap.xml');

const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
let xml = readFileSync(sitemapPath, 'utf-8');
xml = xml.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
writeFileSync(sitemapPath, xml, 'utf-8');

console.log(`✓ sitemap.xml — lastmod mis à jour : ${today}`);
