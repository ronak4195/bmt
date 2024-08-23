import express from 'express';
const router = express.Router();
import { createTheatre, deleteTheatre, updateTheatre } from '../controllers/theatures.controllers.js';
router.post('/create',createTheatre);
router.put('/update/:id',updateTheatre);
router.delete('/delete/:id',deleteTheatre);
export default router;
