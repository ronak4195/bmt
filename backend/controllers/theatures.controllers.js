import express from 'express';
import Theatre from '../models/theatres.model.js';

const router = express.Router();

export const createTheatre = async (req, res) => {
    try {
        const { name, city, ticketPrice, seats, image, showtimes } = req.body;

        const newTheatre = new Theatre({
            name,
            city,
            ticketPrice,
            seats,
            image,
            showtimes  // Assuming showtimes are passed as an array of ObjectIds
        });

        await newTheatre.save();
        res.status(201).json({ message: 'Theatre created successfully', theatre: newTheatre });
    } catch (error) {
        res.status(400).json({ message: 'Error creating theatre', error: error.message });
    }
}
export const updateTheatre = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, city, ticketPrice, seats, image, showtimes } = req.body;

        const updatedTheatre = await Theatre.findByIdAndUpdate(
            id,
            { name, city, ticketPrice, seats, image, showtimes },
            { new: true, runValidators: true }
        );

        if (!updatedTheatre) {
            return res.status(404).json({ message: 'Theatre not found' });
        }

        res.status(200).json({ message: 'Theatre updated successfully', theatre: updatedTheatre });
    } catch (error) {
        res.status(400).json({ message: 'Error updating theatre', error: error.message });
    }
};
export const deleteTheatre = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTheatre = await Theatre.findByIdAndDelete(id);

        if (!deletedTheatre) {
            return res.status(404).json({ message: 'Theatre not found' });
        }

        res.status(200).json({ message: 'Theatre deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting theatre', error: error.message });
    }
};