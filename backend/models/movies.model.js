
import mongoose from 'mongoose';
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true, // in minutes
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    showtimes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Showtime',
    }]
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
// module.exports = Movie;
export default Movie
