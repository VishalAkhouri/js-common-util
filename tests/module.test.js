const { validateEmail } = require('../index');

test('test module export index.js', () => {
    expect(validateEmail(12)).toBeTruthy();
});
