const user = require ('./user');

var vasia =  new user.User("Вася");
var petya = new user.User("Петя");

vasia.hello(petya);

