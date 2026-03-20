import camelCase from "../src/camelCase"; // Import file for testing

// Testing if camelCase function camelCases your word,
//  in this case Foo Bar -> fooBar
describe('camelCase', () => {
    test('camelCases Foo Bar', () => {
        expect(camelCase('Foo Bar')).toBe('fooBar');
    })

    test('camelCases --foo-bar--', () => {
        expect(camelCase('--foo-bar--')).toBe('fooBar')
    })

    test('camelCases __FOO_BAR__', () => {
        expect(camelCase('__FOO_BAR__')).toBe('fooBar')
    })
})