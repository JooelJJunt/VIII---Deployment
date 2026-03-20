import isArguments from "../src/isArguments"; // import function for test

describe('isArguments', () => {
    test('Cheks if `value` an argument object', () => {
        expect(isArguments(function() { return arguments }())).toEqual(true)
    })

    test('Cheks if `value` an argument object', () => {
        expect(isArguments([1, 2, 3])).toEqual(false)
    })
})