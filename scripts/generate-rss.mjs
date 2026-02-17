import { writeFileSync, readdirSync, readFileSync, existsSync } from 'fs';
import path from 'path';
import RSS from 'rss';

function generate() {
  const feed = new RSS({
    title: 'Michael Webber',
    site_url: 'https://michael-webber.com',
    feed_url: 'https://michael-webber.com/rss.xml',
    description: 'A work in progress. Building, running, and figuring it out.',
    language: 'en',
    pubDate: new Date(),
  });

  // 1. Ensure this path matches where your folders (moviola, frosty-run, etc) live
  const postsDir = path.join(process.cwd(), 'app/blog'); 
  const items = readdirSync(postsDir);

  items.forEach((item) => {
    const fullPath = path.join(postsDir, item, 'page.mdx');

    if (existsSync(fullPath)) {
      const content = readFileSync(fullPath, 'utf8');
      
      // Improved Regex to find title and date inside the export const metadata block
      // This looks for title: "Text" or title: 'Text'
      const titleMatch = content.match(/title:\s*["'](.*?)["']/);
      const dateMatch = content.match(/date:\s*["'](.*?)["']/);
      const descMatch = content.match(/description:\s*["'](.*?)["']/);

      if (titleMatch) {
        feed.item({
          title: titleMatch[1],
          description: descMatch ? descMatch[1] : '',
          url: `https://michael-webber.com/blog/${item}`,
          date: dateMatch ? new Date(dateMatch[1]) : new Date(),
        });
        console.log(`Added to RSS: ${titleMatch[1]}`);
      }
    }
  });

  writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
  console.log('✅ RSS Feed updated at /public/rss.xml');
}

generate();