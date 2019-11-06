import { booleanConverts } from './booleanConverts';

describe('BooleanConverts helper function', () => {
    it('true should give Yes ', () => {
        expect(booleanConverts(true)).toBe('Yes')
    });
    it('false should give No ', () => {
        expect(booleanConverts(false)).toBe('No')
    });
});

