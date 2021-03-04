const db = require("../repositories/userRepository");
const {passwordValidation,emailValidation} = require("../helpers/emailValidation")

class Login {
  login = (email, password) => {
    if (emailValidation(email) && passwordValidation(password))
      return db.getAdminByEmailAndPassword(email, password);
    throw "invalid email or password";
  };
}

module.exports = new Login();