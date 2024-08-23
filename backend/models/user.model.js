const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Admin', 'Customer', 'SuperAdmin'],
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation',
    }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
