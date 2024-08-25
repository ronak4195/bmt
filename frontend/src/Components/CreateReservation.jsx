import React, { useState } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';

function CreateReservation() {
  const [formData, setFormData] = useState({
    user: '',
    movie: '',
    theatre: '',
    showtime: '',
    seats: '',
    ticketPrice: '',
    total: '',
    startAt: '',
    orderID: '',
    phone: '',
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
          <Label htmlFor="user" value="User ID" />
          <TextInput
            id="user"
            name="user"
            type="text"
            placeholder="User ID"
            value={formData.user}
            onChange={handleChange}
            required
            shadow
          />
        </div>

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
          <Label htmlFor="showtime" value="Showtime ID" />
          <TextInput
            id="showtime"
            name="showtime"
            type="text"
            placeholder="Showtime ID"
            value={formData.showtime}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="seats" value="Number of Seats" />
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
          <Label htmlFor="total" value="Total Price" />
          <TextInput
            id="total"
            name="total"
            type="number"
            placeholder="Total Price"
            value={formData.total}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="startAt" value="Start At" />
          <TextInput
            id="startAt"
            name="startAt"
            type="datetime-local"
            value={formData.startAt}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="orderID" value="Order ID" />
          <TextInput
            id="orderID"
            name="orderID"
            type="text"
            placeholder="Order ID"
            value={formData.orderID}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="phone" value="Phone Number" />
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <Button type="submit" className="w-full">Create Reservation</Button>
      </form>
    </div>
  );
}

export default CreateReservation;
