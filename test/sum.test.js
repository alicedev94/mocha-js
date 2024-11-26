import { expect } from "chai";
import sum from "../index.js";
describe('sum', () => {
    it('should return the sum of two numbers', () => {
        const result = sum(2, 3);
        expect(result).to.equal(5);
    });
    it('should handle negative numbers', () => {
        const result = sum(-1, -1);
        expect(result).to.equal(-2);
    });
    it('should handle zero', () => {
        const result = sum(0, 0);
        expect(result).to.equal(0);
    });
});
