function generatePassword(length, includeLoverCase, includeUpperCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = ""
    let password = "";

    allowedChars += includeLoverCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(password lenght mus be a least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(At least 1 seat of character needs to be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}



const passwordLength = 5;
const includeLoverCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength, includeLoverCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);
