import React from 'react';
import { Table } from 'flowbite-react';

function Reservation() {
  // Sample array of reservations
  const reservations = [
    {
      _id: '1',
      user: 'John Doe',
      movieTitle: 'Inception',
      theatreName: 'Grand Cinema',
      showtime: '2024-09-01T10:30:00',
      seats: 2,
      ticketPrice: 12.5,
      total: 25,
      phone: '123-456-7890',
      orderID: 'ORD001'
    },
    {
      _id: '2',
      user: 'Jane Smith',
      movieTitle: 'The Dark Knight',
      theatreName: 'Epic Theatre',
      showtime: '2024-09-02T14:00:00',
      seats: 4,
      ticketPrice: 15,
      total: 60,
      phone: '098-765-4321',
      orderID: 'ORD002'
    },
    {
      _id: '3',
      user: 'Alice Johnson',
      movieTitle: 'Interstellar',
      theatreName: 'Star Multiplex',
      showtime: '2024-09-03T18:00:00',
      seats: 3,
      ticketPrice: 10,
      total: 30,
      phone: '555-123-4567',
      orderID: 'ORD003'
    }
    // Add more reservations as needed
  ];

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Movie Title</Table.HeadCell>
          <Table.HeadCell>Theatre Name</Table.HeadCell>
          <Table.HeadCell>Showtime</Table.HeadCell>
          <Table.HeadCell>Seats</Table.HeadCell>
          <Table.HeadCell>Ticket Price</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Order ID</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {reservations.map((reservation) => (
            <Table.Row key={reservation._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {reservation.user}
              </Table.Cell>
              <Table.Cell>{reservation.movieTitle}</Table.Cell>
              <Table.Cell>{reservation.theatreName}</Table.Cell>
              <Table.Cell>{new Date(reservation.showtime).toLocaleString()}</Table.Cell>
              <Table.Cell>{reservation.seats}</Table.Cell>
              <Table.Cell>${reservation.ticketPrice.toFixed(2)}</Table.Cell>
              <Table.Cell>${reservation.total.toFixed(2)}</Table.Cell>
              <Table.Cell>{reservation.phone}</Table.Cell>
              <Table.Cell>{reservation.orderID}</Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Reservation;
