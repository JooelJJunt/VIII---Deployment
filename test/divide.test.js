import divide from "../src/divide"; // Import fuction for testing

// Test for dividing dividend / divisor = result
describe('divide', () => {
    test('divide two numbers and get correct result', () => {
        expect(divide(6, 4)).toBe(1.5);
    })
})