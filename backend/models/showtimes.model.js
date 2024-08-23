const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    theatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theatre',
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation',
    }]
}, { timestamps: true });

const Showtime = mongoose.model('Showtime', showtimeSchema);
module.exports = Showtime;
