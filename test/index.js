/**
 * Imports
 */

var compver = require('..')
var assert = require('assert')

/**
 * Tests
 */

describe('compver', function () {
  it('should work', function () {
    assert.equal(compver('1.0.0', '2.0.0'), 'major')
    assert.equal(compver('1.1.0', '1.2.0'), 'minor')
    assert.equal(compver('1.1.0', '1.1.1'), 'patch')
    assert.equal(compver('1.1.1', '1.1.1'), 'same')
  })
})
