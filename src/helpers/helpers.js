module.exports = {
    checkEmailValidity(email) {
        if  (!/^[A-Za-z0-9]{1,30}@[a-z0-9]{1,30}\.[a-z]{1,5}$/.test(email)) {
            return "Email address must be of valid format.";
        }
        else {
            return "OK";
        }
    },
    checkNameValidity(name) {
        if (!/^[A-Za-z]{2,20}$/.test(name)) {
            return "Names must be between two and 20 characters and consist only of letters.";
        } else {
            return "OK";
        }
    },
    checkPasswordValidity(password) {
        if (password.length < 6 || password.length > 20) {
            return "Password must be between six and 20 characters.";
        } else if (!/[A-Za-z]/.test(password)) {
            return "Password must contain at least one letter.";
        } else if (!/\d/.test(password)) {
            return "Password must contain at least one number.";
        } else {
            return "OK";
        }
    },
    checkConfirmationPasswordValidity(password, confirmationPassword) {
        if (confirmationPassword !== password) {
            return "Confirmation password must match password.";
        } else {
            return "OK";
        }
    },
    checkPhoneNumberValidity(number, isOptional) {
        if (!/^\d*$/.test(number)) {
            return "Phone number must consist only of numbers.";
        } else if (number.length !== 10) {
            if (number.length === 0 && isOptional) {
                return "Optional";
            } else {
                return "Phone number must be ten digits long.";
            }
        } else {
            return "OK";
        }
    },
    composeAvailablePreferredContactOptions(number, method, state) {
        let newState = state;
        if (this.checkPhoneNumberValidity(number) === "OK") {
            if (!state.includes(method)) {
                newState.push(method);
            }
        } else {
            if (state.includes(method)) {
                newState = newState.filter((item) => item !== method);
            }
        }
        return newState;
    }
};