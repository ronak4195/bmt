import React from 'react';
import { Card } from "flowbite-react";  // Ensure you have Flowbite's Card component imported

function DashTheatre() {
  const theatres = [
    {
      _id: '1',
      name: 'Grand Cinema',
      city: 'New York',
      ticketPrice: 12.5,
      seats: 200,
      image: 'https://example.com/grand-cinema.jpg',
      showtimes: ['showtimeId1', 'showtimeId2'],
    },
    {
      _id: '2',
      name: 'Epic Theatre',
      city: 'Los Angeles',
      ticketPrice: 15,
      seats: 150,
      image: 'https://example.com/epic-theatre.jpg',
      showtimes: ['showtimeId3', 'showtimeId4'],
    },
    {
      _id: '3',
      name: 'Star Multiplex',
      city: 'Chicago',
      ticketPrice: 10,
      seats: 300,
      image: 'https://example.com/star-multiplex.jpg',
      showtimes: ['showtimeId5', 'showtimeId6'],
    },
    {
      _id: '4',
      name: 'Cineworld',
      city: 'San Francisco',
      ticketPrice: 14,
      seats: 250,
      image: 'https://example.com/cineworld.jpg', // Provided a placeholder image URL
      showtimes: ['showtimeId7', 'showtimeId8'],
    },
    {
      _id: '5',
      name: 'Galaxy Theatres',
      city: 'Miami',
      ticketPrice: 11,
      seats: 180,
      image: 'https://example.com/galaxy-theatres.jpg',
      showtimes: ['showtimeId9', 'showtimeId10'],
    }
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {theatres.map(theatre => (
        <Card
          key={theatre._id}
          className="max-w-sm"
          imgAlt={theatre.name}
          imgSrc={theatre.image}
        >
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {theatre.name}
          </h5>
          <p className="text-gray-700 dark:text-gray-400">
            Located in: {theatre.city}
          </p>
          <div className="mt-2 mb-2 flex items-center">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Ticket Price: ${theatre.ticketPrice}
            </span>
          </div>
          <div className="mt-2 mb-2 flex items-center">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Seats Available: {theatre.seats}
            </span>
          </div>
          <div className="mt-2 mb-2 flex items-center">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Showtimes: {theatre.showtimes.join(', ')}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default DashTheatre;
