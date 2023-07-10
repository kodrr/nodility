// Function to generate a random password
function generatePassword(length) {
  if (length < 3) {
    return "input is less than 3";
  }

  if (!Number.isInteger(length)) {
    return "input is not a whole number";
  }

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = '~`!@#$%^&*()_-+={}[]|:;"<>,.?/';

  // Combine all character sets
  const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;

  let password = "";

  // Ensure at least one character from each set
  password += getRandomCharacter(lowercaseLetters);
  password += getRandomCharacter(uppercaseLetters);
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(symbols);

  // Generate the remaining characters
  for (let i = 4; i < length; i++) {
    password += getRandomCharacter(allCharacters);
  }

  return password;
}

// Function to get a random character from a string
function getRandomCharacter(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

// Generate a password with a length of 10 characters
const passwordLength = 10;
const password = generatePassword(passwordLength);
console.log(password);
