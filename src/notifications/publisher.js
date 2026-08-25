/** Publishes a notification to every channel a subscription asks for. */
export function publish(subscription, event, channels) {
  const wanted = subscription.channels.filter((c) => channels[c]);
  if (wanted.length === 0) return { delivered: 0, skipped: 'no channel enabled' };
  for (const name of wanted) channels[name].send(subscription.address, event);
  return { delivered: wanted.length };
}
