module.exports = {
    checkEmailValidity(email) {
        if  (!/^[A-Za-z0-9]{1,30}@[a-z]{1,30}\.[a-z]{1,5}$/.test(email)) {
            return "Email address must be of valid format.";
        }
        else {
            return "OK";
        }
    },
    checkNameValidity(name) {
        if (!/^[A-Za-z]{1,12}$/.test(name)) {
            return "Names must be between one and 12 characters and consist only of letters.";
        } else {
            return "OK";
        }
    },
    checkPasswordValidity(password) {
        if (password.length < 6 || password.length > 12) {
            return "Password must be between six and 12 characters.";
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
    }
};