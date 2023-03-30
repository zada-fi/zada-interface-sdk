
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./zdfnswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./zdfnswap-sdk.cjs.development.js')
}
