export async function GET() {
  const res = await fetch('https://api.github.com/repos/Uttam7898/ai-code-reviewer');

  if (!res.ok) {
    return new Response('Failed to fetch stars', { status: res.status });
  }

  const data = await res.json();
  return Response.json({ stars: data.stargazers_count });
}
