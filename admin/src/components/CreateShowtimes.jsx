import React, { useState } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';

function CreateShowtimes() {
  const [formData, setFormData] = useState({
    movie: '',
    theatre: '',
    ticketPrice: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="movie" value="Movie ID" />
          <TextInput
            id="movie"
            name="movie"
            type="text"
            placeholder="Movie ID"
            value={formData.movie}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="theatre" value="Theatre ID" />
          <TextInput
            id="theatre"
            name="theatre"
            type="text"
            placeholder="Theatre ID"
            value={formData.theatre}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="ticketPrice" value="Ticket Price" />
          <TextInput
            id="ticketPrice"
            name="ticketPrice"
            type="number"
            placeholder="Ticket Price"
            value={formData.ticketPrice}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="startDate" value="Start Date" />
          <TextInput
            id="startDate"
            name="startDate"
            type="datetime-local"
            value={formData.startDate}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="endDate" value="End Date" />
          <TextInput
            id="endDate"
            name="endDate"
            type="datetime-local"
            value={formData.endDate}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <Button type="submit" className="w-full">Create Showtime</Button>
      </form>
    </div>
  );
}

export default CreateShowtimes;
