import add from '../src/add.js'; // import file for testing

// Test adding 6 + 4 and it to be equal 
describe('add', () => {
    test('adds 6 + 4 equal 10', () => {
        expect(add(6, 4)).toBe(10);
    });
});