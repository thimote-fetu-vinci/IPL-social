import { isValidPassword } from "../functions/passwordChecker.js";

describe("Password Checker", function () {
    it("should return true if the password does contain at least 8 characters", function () {
        const password = "&hfv15A#";

        const result = isValidPassword(password);
        
        expect(result).toBe(true);
    });
});