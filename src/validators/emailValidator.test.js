const { validateEmail } = require('./emailValidator');

test('test email', () => {
    expect(validateEmail(12)).toBeTruthy();
});
