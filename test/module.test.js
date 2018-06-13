const Envie = require('../src')
const Joi = require('joi')

describe('Envie', () => {
  it('is a function', () => {
    expect(typeof Envie).toBe('function')
  })
  describe('.Envie', () => {
    it('is the same function', () => {
      expect(Envie.Envie).toBe(Envie)
    })
  })

  describe('.Joi', () => {
    it('is the bundled Joi module', () => {
      expect(Envie.Joi).toBe(Joi)
    })
  })
})
