const fs = require('fs');
const Repository = require('./respository');

class ProductsRepository extends Repository {}

module.exports = new ProductsRepository('products.json');
