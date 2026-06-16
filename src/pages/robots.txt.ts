export async function GET() {
  const content = `
User-agent: *
Allow: /
Sitemap: https://shaunfurtado.is-a.dev/sitemap.xml
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
