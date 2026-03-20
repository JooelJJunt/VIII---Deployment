import difference from "../src/difference"; // import function for testing

describe('difference', ()=> {
    test('Should check differences in different arrays', ()=> {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    })
})