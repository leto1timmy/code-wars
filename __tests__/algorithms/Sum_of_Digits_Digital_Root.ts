import { assert } from 'chai';
import { digitalRoot } from './../../src/algorithms/Sum_of_Digits_Digital_Root';

describe('solution', () => {
  it('should work for fixed tests', () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(456), 6);
  });
});
