/** Datadog service connector. The retry budget is per call, not per process. */
export async function send(client, metric, { retries = 3 } = {}) {
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    const res = await client.post('/api/v1/series', metric);
    if (res.ok) return { ok: true, attempts: attempt };
    if (res.status < 500) return { ok: false, status: res.status, attempts: attempt };
  }
  return { ok: false, status: 'exhausted', attempts: retries };
}
