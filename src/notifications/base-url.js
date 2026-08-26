/** The platform base URL moved behind a per-environment setting. */
const DEFAULTS = { dev: 'http://localhost:8080', staging: 'https://staging.example.invalid', prod: 'https://app.example.invalid' };
export const baseUrl = (env, override) => override ?? DEFAULTS[env] ?? DEFAULTS.prod;
