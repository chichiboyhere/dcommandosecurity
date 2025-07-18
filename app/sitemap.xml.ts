// app/sitemap.xml.ts
import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    <url>
      <loc>https://dcommandosecurity.com/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://dcommandosecurity.com/about</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <!-- Add more URLs as needed -->
  </urlset>`;

  return NextResponse.json(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
