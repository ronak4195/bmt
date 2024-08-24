import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Handle location data from frontend
app.post('/api/location', async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    // Call an external API to get location details (e.g., OpenCage, Geocoding API)
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`);

    const locationData = response.data.results[0].components;
    const city = locationData.city || locationData.town || 'Unknown';
    const country = locationData.country || 'Unknown';

    // Send response back to frontend
    res.json({ city, country });
  } catch (error) {
    console.error('Error fetching location data:', error);
    res.status(500).json({ error: 'Failed to fetch location data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
