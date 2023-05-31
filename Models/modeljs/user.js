"use strict";
const mongoose = require('mongoose');
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Manager"] = 2] = "Manager";
})(Roles || (Roles = {}));
let hello = "mobin";
const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phoneNumber: Number,
    password: String,
    shippingAddr: [{
            street: String,
            city: String,
        }],
    walletBalance: Number,
    role: Roles
});
