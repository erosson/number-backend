import backends from '../../src/number-backend'
import Decimal from 'decimal.js'

describe('numberBackend', () => {
  it('inits natives', () => {
    const backend = backends['native']
    expect(backend.normalize(10)).to.equal(10)
  })
  it('inits decimals', () => {
    const backend = backends['decimal.js']
    expect(backend.normalize('10').equals(new Decimal(10))).to.equal(true)
    expect(backend.normalize(10).equals(new Decimal(10))).to.equal(true)
    expect(backend.normalize(new Decimal(10)).equals(new Decimal(10))).to.equal(true)
    expect(backend.normalize(new Decimal('1e9997')).equals(new Decimal('1e9997'))).to.equal(true)
  })
})
