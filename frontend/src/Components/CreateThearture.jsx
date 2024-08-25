import React, { useState } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';

function CreateTheatre() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    ticketPrice: '',
    seats: '',
    image: '',
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
          <Label htmlFor="name" value="Theatre Name" />
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Theatre Name"
            value={formData.name}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="city" value="City" />
          <TextInput
            id="city"
            name="city"
            type="text"
            placeholder="City"
            value={formData.city}
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
          <Label htmlFor="seats" value="Seats" />
          <TextInput
            id="seats"
            name="seats"
            type="number"
            placeholder="Number of Seats"
            value={formData.seats}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="image" value="Image URL" />
          <TextInput
            id="image"
            name="image"
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            shadow
          />
        </div>

        <Button type="submit" className="w-full">Create Theatre</Button>
      </form>
    </div>
  );
}

export default CreateTheatre;
