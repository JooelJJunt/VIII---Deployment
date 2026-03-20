import ceil from "../src/ceil"; // Import function for testing

// Computes `number` rounded up to `precision`. 
// (Round up: the smallest integer greater than or equal to a given number.)
describe('ceil', () => {
    test('Rounds number up to precision', () => {
        expect(ceil(4.006)).toBe(5);
    })

    test('Rounds number to the given decimal place', () => {
        expect(ceil(6.004, 2)).toBe(6.01);
    })

    test('Rounds number up to a negative precision', () => {
        expect(ceil(6040, -2)).toBe(6100);
    })
    
})