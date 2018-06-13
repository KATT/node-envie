const Joi = require('joi')
const Envie = require('../')

describe('new Envie({}, {})', () => {
  const envie = Envie({}, {
    defined: 8
  })
  describe('.validate()', () => {
    it('does not throw', () => {
      expect(() => envie.validate()).not.toThrowError()
    })
  })
})

describe('new Envie(schema, values)', () => {
  const envie = Envie({
    key: Joi.number()
  }, {
    key: 8
  })
  describe('.validate()', () => {
    describe('with valid data', () => {
      it('does not throw', () => {
        expect(() => envie.validate()).not.toThrowError()
      })
    })
    describe('with valid data', () => {
      const envie = Envie({
        key: Joi.number()
      }, {
        key: 'hello'
      })
      it('throws', () => {
        expect(() => envie.validate()).toThrowError()
      })
    })
  })
})
