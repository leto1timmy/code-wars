import { convertFrac } from '../../src/algorithms/Common_Denominators';
import { assert } from 'chai';

describe('Fixed Tests', function () {
  it('Basic tests convertFrac', function () {
    assert.strictEqual(
      convertFrac([
        [1, 2],
        [1, 3],
        [1, 4]
      ]),
      '(6,12)(4,12)(3,12)'
    );
    assert.strictEqual(
      convertFrac([
        [69, 130],
        [87, 1310],
        [3, 4]
      ]),
      '(18078,34060)(2262,34060)(25545,34060)'
    );
  });
});
