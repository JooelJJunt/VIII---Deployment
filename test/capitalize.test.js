import capitalize from "../src/capitalize"; // Import file for testing

// Test is suppose to capitalize your input,
// in this case FRED becomes Fred
describe('capitalize', () => {
    test('capitalize FRED', () =>{
        expect(capitalize('FRED')).toBe('Fred')
    })
})

