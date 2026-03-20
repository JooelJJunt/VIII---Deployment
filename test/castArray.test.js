import castArray from "../src/castArray"; // Import functio for testing

// Tests casts value to array [] if it's not one 
describe('castArray', () => {
    test('cast number into [number] array', () => {
        expect(castArray(1)).toEqual([1])
    })

    test('change object to array', () => {
        expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
    })

    test('cast string to array', () => {
        expect(castArray('abc')).toEqual(['abc'])
    })

    test('cast null into [null] array', () => {
        expect(castArray(null)).toEqual([null])
    })

    test('change undefined into [undefined] array', () => {
        expect(castArray(undefined)).toEqual([undefined])
    })

    test('give an empy array when not given parameters', () => {
        expect(castArray()).toEqual([])
    })

    test('retunr same array as in reference', () => {
        const array = [1, 2, 3];
        expect(castArray(array) === array).toBe(true)
    })
})