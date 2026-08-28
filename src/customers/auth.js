/** Customer application auth. Tokens are opaque to this module on purpose. */
export function authorise(session, scope) {
  if (!session || session.expiresAt < Date.now()) return { ok: false, reason: 'expired' };
  if (!session.scopes.includes(scope)) return { ok: false, reason: 'missing scope' };
  return { ok: true };
}
