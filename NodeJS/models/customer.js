const mongoose = require('mongoose');

var Customer = mongoose.model('Customer', {
    name: {type: String},
    userid: {type: String},
    phone: {type: String},
    email: {type: String},
    password: {type: String},
}, 'Customers');

module.exports = {
    Customer: Customer
};