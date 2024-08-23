
import mongoose from 'mongoose';
const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    showtimes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Showtime',
    }]
}, { timestamps: true });

const Theatre = mongoose.model('Theatre', theatreSchema);
export default Theatre;

