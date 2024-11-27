import res from '../other/res.js';

describe('Rest Test', () => {
    test('Should substract two numbers', () => {
        expect(res(2, 1)).toBe(1);
    });
});