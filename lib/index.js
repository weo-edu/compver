/**
 * compver
 */

function compver () {
  a = a.split('.')
  b = b.split('.')

  if (a[0] !== b[0]) return 'major'
  if (a[1] !== b[1]) return 'minor'
  if (a[2] !== b[2]) return 'patch'

  return 'same'
}

/**
 * Exports
 */

module.exports = compver
