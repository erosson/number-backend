function isWrapped(a) {
  return a && typeof(a.val) !== 'undefined'
}
function unwrap(a) {
  return isWrapped(a) ? a.val : a
}
function wrap(a) {
  return isWrapped(a) ? a : new WrapNative(a)
}
class WrapNative {
  constructor(val) {
    this.val = val
  }
  // match the decimal.js interface. https://github.com/MikeMcl/decimal.js/
  abs() { return new WrapNative(Math.abs(this.val)) }
  absoluteValue() { return this.abs() }
  ceil() { return new WrapNative(Math.ceil(this.val)) }
  floor() { return new WrapNative(Math.floor(this.val)) }
  neg() { return new WrapNative(this.val * -1) }
  negated() { return this.neg() }
  round() { return new WrapNative(Math.round(this.val)) }

  // toDecimalPlaces
  // toDP
  // toFraction
  // toNearest
  // toSignificantDigits
  // toSD
  trunc() { return new WrapNative(Math.trunc(this.val)) }
  truncated() { return this.trunc() }

  // toBinary
  // toExponential
  // toFixed
  // toHex
  // toHexadecimal
  toJson() { return this.val }
  // toOctal
  // toPrecision
  toString() { return this.val+'' }
  valueOf() { return this.val }
  // toNumber

  // cmp
  // comparedTo
  eq(a) { return this.val === unwrap(a) }
  equals(a) { return this.eq(a) }
  gt(a) { return this.val > unwrap(a) }
  greaterThan(a) { return this.gt(a) }
  gte(a) { return this.val >= unwrap(a) }
  greaterThanOrEqualTo(a) { return this.gte(a) }
  lt(a) { return this.val < unwrap(a) }
  lessThan(a) { return this.lt(a) }
  lte(a) { return this.val <= unwrap(a) }
  lessThanOrEqualTo(a) { return this.lte(a) }

  cbrt() { return new WrapNative(Math.cbrt(this.val)) }
  cubeRoot() { return this.cbrt() }
  div(a) { return new WrapNative(this.val / unwrap(a)) }
  dividedBy(a) { return this.div(a) }
  divToInt(a) { return this.div(a).floor() }
  dividedToIntegerBy(a) { return this.divToInt() }
  log(n) { return new WrapNative(Math.log(this.val, unwrap(n))) }
  logarithm(n) { return this.log(n) }
  sub(a) { return new WrapNative(this.val - unwrap(a)) }
  minus(a) { return this.sub(a) }
  mod(a) { return new WrapNative(this.val % unwrap(a)) }
  modulo(a) { return this.mod(a) }
  exp() { return new WrapNative(Math.exp(this.val)) }
  naturalExponential() { return this.exp() }
  ln() { return new WrapNative(Math.ln(this.val)) }
  naturalLogarithm() { return this.ln() }
  add(a) { return new WrapNative(this.val + unwrap(a)) }
  plus(a) { return this.add(a) }
  sqrt() { return new WrapNative(Math.sqrt(this.val)) }
  squareRoot() { return this.sqrt() }
  mul(a) { return new WrapNative(this.val * unwrap(a)) }
  times(a) { return this.mul(a) }
  pow(a) { return new WrapNative(Math.pow(this.val, unwrap(a))) }
  toPower(a) { return this.pow(a) }

  // dp
  // decimalPlaces
  // sd
  // precision

  cos() { return new WrapNative(Math.cos(this.val)) }
  cosine() { return this.cos() }
  sin() { return new WrapNative(Math.sin(this.val)) }
  sine() { return this.sin() }
  tan() { return new WrapNative(Math.tan(this.val)) }
  tangent() { return this.tan() }
  acos() { return new WrapNative(Math.acos(this.val)) }
  inverseCosine() { return this.acos() }
  asin() { return new WrapNative(Math.asin(this.val)) }
  inverseSine() { return this.asin() }
  atan() { return new WrapNative(Math.atan(this.val)) }
  inverseTangent() { return this.asin() }

  // cosh...
  // acosh...

  log2() { return new WrapNative(Math.log2(this.val)) }
  log10() { return new WrapNative(Math.log10(this.val)) }
}

const backends = {
  'native': {
    normalize(val) {
      return wrap(val)
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
