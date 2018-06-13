const Envie = require('../')

describe('new Envie({}, {})', () => {
  const envie = Envie({}, {
    defined: 8
  })
  describe('.get(key)', () => {
    describe('when the key is not set up', () => {
      it('returns undefined', () => {
        expect(envie.get('not_defined')).toBe(undefined)
      })
    })

    describe('when the key is set up', () => {
      it('returns the raw value', () => {
        expect(envie.get('defined')).toBe(8)
      })
    })
  })
})
