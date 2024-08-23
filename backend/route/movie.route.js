import express from 'express';
const router = express.Router();
import { createMovie, deleteMovie, updateMovie } from '../controllers/movies.controllers.js';
router.post('/create',createMovie);
router.put('/update/:id',updateMovie);
router.delete('/delete/:id',deleteMovie);
export default router;
