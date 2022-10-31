import { assert } from 'chai';
import { spinWords } from './../../src/algorithms/Stop_gninnipS_My_sdroW';

describe('spinWords', () => {
  it('should pass some fixed tests', () => {
    assert.strictEqual(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
  });
});
