const callingFunc = require('../sample');

test('add 2 numbers', ()=> {
    expect(callingFunc(2, 3)).toBe(5);
})