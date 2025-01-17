function isValidPassword(password) {
    const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 8) {
        return false;
    }

    if (!specialCharsRegex.test(password)) {
        return false;
    }

    if (!/\d/.test(password)) {
        return false;
    }

    return true;
}

export { isValidPassword };