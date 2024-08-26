import React, { useState } from 'react';
import { Label, TextInput, Button, Select } from 'flowbite-react';

function CreateUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Customer',
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="flex w-full max-w-md flex-col gap-4 bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center mb-6">Create User</h2>
        
        <div>
          <Label htmlFor="name" value="Name" />
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="email" value="Email" />
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="name@flowbite.com"
            value={formData.email}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="password" value="Password" />
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="role" value="Role" />
          <Select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
            <option value="SuperAdmin">SuperAdmin</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="phone" value="Phone" />
          <TextInput
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            shadow
          />
        </div>

        <Button type="submit" gradientMonochrome="info" className="mt-4">Create User</Button>
      </form>
    </div>
  );
}

export default CreateUser;
