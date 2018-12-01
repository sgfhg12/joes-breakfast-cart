const Sequelize = require('sequelize');
const db = require('../db');
const crypto = require('crypto');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        // making password act like a func hides it when serializing to JSON 
        // this gets around sequelize's lack of a private option
        get(){
            return () => this.getDataValue('password');
        }
    },
    salt: {
        type: Sequelize.TEXT,
        get () {
            return () => this.getDataValue('salt');
        }
    }

});

/*
Logic when user logs in
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}
*/

User.generateSalt = function () {
    //create random secure token
    return crypto.randomBytes(16).toString('base64')
  }

User.encryptPassword = function (plainText, salt) {
   //user random secure token and hash it with SHA256
    return crypto
      .createHash('RSA-SHA256')
      .update(plainText)
      .update(salt)
      .digest('hex')
}

const setSaltAndPassword = user => {
    /*
    check if user's password has changed and if so,
    encrypt user's password before saving/updating
    */
    if (user.changed('password')) {
      user.salt = User.generateSalt()
      user.password = User.encryptPassword(user.password(), user.salt())
    }
}

/*
life cycle methods for User
Before user is created/updated to the User table,
call setSaltAndPassword
*/
User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User;
