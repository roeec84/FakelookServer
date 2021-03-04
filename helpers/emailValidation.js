const emailValidation = (email) =>
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordValidation = (password) => password.length > 4;

module.exports = {emailValidation,passwordValidation}