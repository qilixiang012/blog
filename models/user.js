/**
 * Created with JetBrains WebStorm.
 * User: yyz
 * Date: 7/22/13
 * Time: 10:07 AM
 * To change this template use File | Settings | File Templates.
 */
var mongodb = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
};
module.exports = User;

User.prototype.save = = function save(callback) {
    var user = {
        name: this.name,
        password: this.password
    };

