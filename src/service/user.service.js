const { userModel } = require("../model/user.model");

module.exports = class UserService {
  createUser(userInform) {
    return userModel.create(userInform);
  }
}
