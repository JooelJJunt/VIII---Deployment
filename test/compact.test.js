import compact from "../src/compact"; // Import function for testing

// Test creates clean array that has been cleaned from falsey values,
// falsey values = `false`, ´null´, ´0´, ´´""", ´undefined´ and ´NaN´
describe('compact', () => {
    test('function should remove falsey values', () => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
    })
})