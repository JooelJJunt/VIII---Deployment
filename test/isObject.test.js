import isObject from "../src/isObject"; // import function for testing

// Test checks if value is object,
// (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String`)
describe('isObject', () => {
    test('Should check if value is object', ()=> {
        expect(isObject({})).toEqual(true);
    });
    
    test('Should check if array is object', ()=> {
        expect(isObject([1, 2 ,3])).toEqual(true);
    });
    
    test('Should check if function is object', ()=> {
        expect(isObject(Function)).toEqual(true);
    });
    
    test('Should check if null isn`t object', ()=> {
        expect(isObject(null)).toEqual(false);
    });
})