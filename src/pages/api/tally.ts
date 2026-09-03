export async function POST({ request, locals }) {
  const { styleId } = await request.json();

  if (!styleId) {
    return new Response(JSON.stringify({ error: "Missing styleId" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const kv = locals.runtime.env.KV;

  const current = await kv.get(styleId);
  const count = (current ? parseInt(current, 10) : 0) + 1;
  await kv.put(styleId, String(count));

  return new Response(JSON.stringify({ count }), {
    headers: { "Content-Type": "application/json" },
  });
}
