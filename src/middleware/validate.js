const emailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};

const passwordValidation = (password) => {
    return password.length >= 6;
};

const inputValidation = (input) => {
    return !input;
}

export { emailValidation, passwordValidation, inputValidation };