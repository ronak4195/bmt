import React from 'react';
import { Table } from 'flowbite-react';

function DashUsers() {
  // Sample array of users
  const users = [
    {
      _id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      phone: '123-456-7890',
      orders: ['ORD001', 'ORD002'],
    },
    {
      _id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Customer',
      phone: '098-765-4321',
      orders: ['ORD003'],
    },
    {
      _id: '3',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'SuperAdmin',
      phone: '555-123-4567',
      orders: [],
    },
    // Add more users as needed
  ];

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user) => (
            <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.name}
              </Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
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

export default DashUsers;
