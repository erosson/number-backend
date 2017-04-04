class WrapNative {
  constructor(val) {
    this.val = val
  }
  // match the decimal.js interface. https://github.com/MikeMcl/decimal.js/
  add(a) { return new WrapNative(this.val + a) }
  div(a) { return new WrapNative(this.val / a) }
  mod(a) { return new WrapNative(this.val % a) }
  mul(a) { return new WrapNative(this.val * a) }
  pow(a) { return new WrapNative(Math.pow(this.val, a)) }
  sub(a) { return new WrapNative(this.val - a) }

  abs() { return new WrapNative(Math.abs(this.val)) }
  ceil() { return new WrapNative(Math.ceil(this.val)) }
  floor() { return new WrapNative(Math.floor(this.val)) }
  min() { return new WrapNative(Math.min(this.val)) }
  max() { return new WrapNative(Math.max(this.val)) }
  round() { return new WrapNative(Math.round(this.val)) }
  trunc() { return new WrapNative(Math.trunc(this.val)) }

  cbrt() { return new WrapNative(Math.cbrt(this.val)) }
  sqrt() { return new WrapNative(Math.sqrt(this.val)) }

  exp() { return new WrapNative(Math.exp(this.val)) }
  ln() { return new WrapNative(Math.ln(this.val)) }
  log() { return new WrapNative(Math.log(this.val)) }
  log2() { return new WrapNative(Math.log2(this.val)) }
  log10() { return new WrapNative(Math.log10(this.val)) }

  cos() { return new WrapNative(Math.cos(this.val)) }
  sin() { return new WrapNative(Math.sin(this.val)) }
  tan() { return new WrapNative(Math.tan(this.val)) }
  acos() { return new WrapNative(Math.acos(this.val)) }
  asin() { return new WrapNative(Math.asin(this.val)) }
  atan() { return new WrapNative(Math.atan(this.val)) }
  atan2() { return new WrapNative(Math.atan2(this.val)) }
}

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
      let Decimal = (config && (config.Decimal || config.decimal))
        || (global && global.Decimal)
        || (global && global.window && window.Decimal)
        // the build/minifier must avoid compiling this in. It's externalized in the gulpfile.
        || require('decimal.js')
      return Decimal.clone(config)
    },
    normalize(val, config={}) {
      const Decimal = this._requireDecimal(config)
      return new Decimal(val)
    },
  },
}
export default backends
