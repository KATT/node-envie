const Joi = require('joi')
const Envie = require('../src')
const Descriptor = jest.mock('../src/descriptor')

describe('new Envie({descriptions...})', () => {
  const description = {
    with_default: Joi.string().default('hello world'),
    not_defined: Joi.number(),
    to_cast: Joi.number(),
    defined: Joi.number(),
    invalid: Joi.number()
  }
  const values = {
    to_cast: '8',
    defined: 8,
    invalid: 'hello'
  }
  const envie = Envie(description, values)

  describe('.helpString()', () => {
    let descriptorMock
    beforeEach(() => {
      Descriptor.clearAllMocks()
    })

    it('calls Descriptor.description() for each entry', () => {
      envie.helpString()
      Object.keys(description).forEach((key) => {
        descriptorMock
          .expects('description')
          .withArgs(key, description[key], values[key])
          .returns('hey')
      })
    })

    it(
      'concatenates the result of each description in the returned string',
      () => {
        Object.keys(description).forEach((key) => {
          descriptorMock
            .expects('description')
            .withArgs(key)
            .returns(`${key}\n`)
        })
        const actual = envie.helpString()
        expect(actual).toBe(`with_default

not_defined

to_cast

defined

invalid
`)
      }
    )
  })
})
