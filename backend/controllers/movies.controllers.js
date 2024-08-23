import express from 'express';
import Movie from  '../models/movies.model.js';
 // Ensure you have the correct path to your Movie model
const router = express.Router();

// Create a new movie
export const createMovie = async (req, res, next) => {
    try {
        const { title, image, language, genre, director, trailer, description, duration, startDate, endDate } = req.body;

        const newMovie = new Movie({
            title,
            image,
            language,
            genre,
            director,
            trailer,
            description,
            duration,
            startDate,
            endDate
        });

        await newMovie.save();
        res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
    } catch (error) {
        res.status(400).json({ message: 'Error creating movie', error: error.message });
    }
}
export const updateMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, image, language, genre, director, trailer, description, duration, startDate, endDate } = req.body;

        const updatedMovie = await Movie.findByIdAndUpdate(
            id,
            { title, image, language, genre, director, trailer, description, duration, startDate, endDate },
            { new: true, runValidators: true }
        );

        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        res.status(200).json({ message: 'Movie updated successfully', movie: updatedMovie });
    } catch (error) {
        res.status(400).json({ message: 'Error updating movie', error: error.message });
    }
}
export const deleteMovie = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedMovie = await Movie.findByIdAndDelete(id);

        if (!deletedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting movie', error: error.message });
    }
}

// Delete a movie by ID



