const Validation = require("@dwipuspit/validator");

class Validator extends Validation {
    isEqual(string1, string2, isCaseSensitive = false) {
        if (isCaseSensitive) return string1 === string2;
        return string1.toLowerCase() === string2.toLowerCase();
    }
    isEmail(email) {
        const patterEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return email ? patterEmail.test(email) : false;
    }
    isPhone(phone, min_length = 5) {
        return this.is_Phone(phone, min_length);
    }
}

module.exports = Validator