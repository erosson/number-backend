const backends = {
  'native': {
    normalize(val) {
      return val
    },
  },

  'decimal.js': {
    // Note that decimal.js is never imported by this library!
    // We're using its methods passed in by the caller. This keeps the library
    // much smaller for the common case: no decimal.js.
    // api docs: https://mikemcl.github.io/decimal.js/
    _requireDecimal(config) {
      let Decimal
      let win = global && global.window
      if (win && win.Decimal) {
        Decimal = win.Decimal
      }
      else {
        // the build/minifier must avoid compiling this in. It's externalized in the gulpfile.
        Decimal = require('decimal.js')
      }
      return Decimal.clone(config)
    },
    normalize(val, config) {
      const Decimal = this._requireDecimal(config)
      return new Decimal(val)
    },
  },
}
export default backends
