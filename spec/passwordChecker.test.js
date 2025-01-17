import { isValidPassword } from "../functions/passwordChecker.js";

describe("Password Checker", function () {
    it("should return true if the password does contain at least 8 characters", function () {
        const password = "&hfv15A#";

        const result = isValidPassword(password);

        expect(result).toBe(true);
    });

    it("should return false if the password does not contain at least 8 characters", function () {
        const password = "123";

        const result = isValidPassword(password);

        expect(result).toBe(false);
    });

    it("should return true if the password contains at least one special character", function () {
        const password = "&hfv15A#";

        const result = isValidPassword(password);

        expect(result).toBe(true);
    });

    it("should return false if the password does not contain at least one special character", function () {
        const password = "abcdefgh";

        const result = isValidPassword(password);

        expect(result).toBe(false);
    });

    it("should return true if the password contains at least a number", function () {
        const password = "&hfv15A#";

        const result = isValidPassword(password);

        expect(result).toBe(true);
    });

    it("should return false if the password does not contain at least a number", function () {
        const password = "abcdefgh";

        const result = isValidPassword(password);

        expect(result).toBe(false);
    });

    it("should return true if the password does not contain the string 'IPL' in any case", function () {
        const password = "&hfv15A#";

        const result = isValidPassword(password);

        expect(result).toBe(true);
    });

    it("should return false if the password contains the string 'IPL'", function () {
        const password = "IPL&hfv15A#";

        const result = isValidPassword(password);

        expect(result).toBe(false);
    });

    it("should return false if the password contains the string 'ipl'", function () {
        const password = "ipl&hfv15A#";

        const result = isValidPassword(password);

        expect(result).toBe(false);
    });

    it("should return false if the password contains the string 'Ipl'", function () {
        const password = "IpL&hfv15A#";

        const result = isValidPassword(password);

        expect(result).toBe(false);
    });
});