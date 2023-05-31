const mongoose = require('mongoose')

enum Roles{
    Admin,
    User,
    Manager
}
let hello = "mobin"
const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phoneNumber: Number,
    password: String,
    shippingAddr:[{
        street:String,
        city:String,
    }],
    walletBalance: Number,
    role:Roles
})
