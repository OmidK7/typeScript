"use strict";
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    stock: Number,
    information: String,
    price: Number,
    off: {
        type: Number,
        require: true,
        minlength: 1,
        maxlength: 3
    },
    colors: [
        {
            color: String,
        },
    ],
});
