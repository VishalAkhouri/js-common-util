exports.validateEmail = (email) => {
    const emailRegex = /[0-9]/;
    return emailRegex.test(email);
};
