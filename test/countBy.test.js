import countBy from "../src/countBy"; // Import function for Test

describe('countBy', () => {
    test('Should return correct values of true and false', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 })
    })
})