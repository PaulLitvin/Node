// var db = require('db');
// var log = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(who.name);
};

exports.User = User;

