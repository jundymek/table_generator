import { booleanConverts } from './booleanConverts';

describe('BooleanConverts', () => {
    it('true should give Yes ', () => {
        expect(booleanConverts(true)).toBe('Yes')
    });
    it('false should give No ', () => {
        expect(booleanConverts(false)).toBe('No')
    });
});

