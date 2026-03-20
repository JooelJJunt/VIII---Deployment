import chunk from "../src/chunk"; // import function for test

// Tests if elements splits equally into groups in the given size
describe('chunk', () => {
    test('should create an array of elements into groups lenght of `size`', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    })

    test('if array can`t be split evenly, rest will remain in own array', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    })
})