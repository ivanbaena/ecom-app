const Repository = require('./respository');

class CartsRepository extends Repository {}

module.exports = new CartsRepository('cart.json');
