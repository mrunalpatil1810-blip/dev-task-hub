const assert = require('assert');

const isValid = (task) => typeof task === 'string' && task.trim().length > 0;

// Valid input
assert.strictEqual(isValid('Test Task'), true);

// Invalid inputs
assert.strictEqual(isValid(' '), false);
assert.strictEqual(isValid(''), false);
assert.strictEqual(isValid(null), false);
assert.strictEqual(isValid(123), false);

console.log('Tests Passed!');
