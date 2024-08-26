import React, { useState } from 'react';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';

function CreateMovies() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    language: '',
    genre: '',
    director: '',
    trailer: '',
    description: '',
    duration: '',
    startDate: '',
    endDate: '',
    showtimes: '',
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
        <h2 className="text-2xl font-semibold text-center mb-6">Create Movie</h2>

        <div>
          <Label htmlFor="title" value="Movie Title" />
          <TextInput
            id="title"
            name="title"
            type="text"
            placeholder="Movie Title"
            value={formData.title}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="image" value="Image URL" />
          <TextInput
            id="image"
            name="image"
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="language" value="Language" />
          <TextInput
            id="language"
            name="language"
            type="text"
            placeholder="Language"
            value={formData.language}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="genre" value="Genre" />
          <TextInput
            id="genre"
            name="genre"
            type="text"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="director" value="Director" />
          <TextInput
            id="director"
            name="director"
            type="text"
            placeholder="Director"
            value={formData.director}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="trailer" value="Trailer URL" />
          <TextInput
            id="trailer"
            name="trailer"
            type="text"
            placeholder="Trailer URL"
            value={formData.trailer}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="description" value="Description" />
          <Textarea
            id="description"
            name="description"
            placeholder="Movie Description"
            value={formData.description}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="duration" value="Duration (in minutes)" />
          <TextInput
            id="duration"
            name="duration"
            type="number"
            placeholder="Duration in minutes"
            value={formData.duration}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="startDate" value="Start Date" />
          <TextInput
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <div>
          <Label htmlFor="endDate" value="End Date" />
          <TextInput
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            required
            shadow
          />
        </div>

        <Button type="submit" gradientMonochrome="info" className="mt-4">
          Create Movie
        </Button>
      </form>
    </div>
  );
}

export default CreateMovies;
