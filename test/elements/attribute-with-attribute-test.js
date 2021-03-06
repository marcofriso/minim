const { expect } = require('../spec-helper');
const minim = require('../../lib/minim').namespace();

const ObjectElement = minim.getElementClass('object');
const StringElement = minim.getElementClass('string');

describe('Element whose attribute has attribute', () => {
  let object; let string;

  before(() => {
    object = new ObjectElement({
      foo: 'bar',
    });

    string = new StringElement('xyz');
    string.attributes.set('pqr', 1);

    object.attributes.set('baz', string);
  });

  it('returns the correct Refract value', () => {
    const value = object.attributes.get('baz').attributes.get('pqr').toValue();
    expect(value).to.equal(1);
  });
});
