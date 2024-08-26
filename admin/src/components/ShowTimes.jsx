import React from 'react';
import { Table } from 'flowbite-react';

function ShowTimes() {
  // Sample array of showtimes
  const showtimes = [
    {
      _id: '1',
      movieTitle: 'Inception',
      theatreName: 'Grand Cinema',
      ticketPrice: 12.5,
      startDate: new Date('2024-09-01T10:30:00'),
      endDate: new Date('2024-09-01T13:00:00'),
    },
    {
      _id: '2',
      movieTitle: 'The Dark Knight',
      theatreName: 'Epic Theatre',
      ticketPrice: 15,
      startDate: new Date('2024-09-02T14:00:00'),
      endDate: new Date('2024-09-02T16:30:00'),
    },
    {
      _id: '3',
      movieTitle: 'Interstellar',
      theatreName: 'Star Multiplex',
      ticketPrice: 10,
      startDate: new Date('2024-09-03T18:00:00'),
      endDate: new Date('2024-09-03T21:00:00'),
    }
    // Add more showtimes as needed
  ];

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Movie Title</Table.HeadCell>
          <Table.HeadCell>Theatre Name</Table.HeadCell>
          <Table.HeadCell>Ticket Price</Table.HeadCell>
          <Table.HeadCell>Start Time</Table.HeadCell>
          <Table.HeadCell>End Time</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {showtimes.map((showtime) => (
            <Table.Row key={showtime._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {showtime.movieTitle}
              </Table.Cell>
              <Table.Cell>{showtime.theatreName}</Table.Cell>
              <Table.Cell>${showtime.ticketPrice}</Table.Cell>
              <Table.Cell>{showtime.startDate.toLocaleString()}</Table.Cell>
              <Table.Cell>{showtime.endDate.toLocaleString()}</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
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

export default ShowTimes;
