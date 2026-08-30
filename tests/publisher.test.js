import { test } from 'node:test';
import assert from 'node:assert/strict';
import { publish } from '../src/notifications/publisher.js';

test('publishes only to enabled channels', () => {
  const sent = [];
  const channels = { email: { send: (a, e) => sent.push(['email', a, e]) } };
  const r = publish({ channels: ['email', 'sms'], address: 'x@example.invalid' }, { id: 1 }, channels);
  assert.equal(r.delivered, 1);
  assert.equal(sent.length, 1);
});

test('says so when nothing is enabled', () => {
  const r = publish({ channels: ['sms'], address: 'x' }, { id: 1 }, {});
  assert.equal(r.delivered, 0);
});
