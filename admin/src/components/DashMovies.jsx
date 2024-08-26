import React from 'react';
import { Card } from "flowbite-react";

function DashMovies() {
    const movies = [
        {
            _id: '1',
            title: 'Inception',
            image: 'https://example.com/inception.jpg',
            language: 'English',
            genre: 'Science Fiction',
            director: 'Christopher Nolan',
            trailer: 'https://example.com/inception-trailer.mp4',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            duration: 148,
            startDate: new Date('2024-09-01'),
            endDate: new Date('2024-09-30'),
            showtimes: ['showtimeId1', 'showtimeId2']
        },
        {
            _id: '2',
            title: 'The Dark Knight',
            image: 'https://example.com/dark-knight.jpg',
            language: 'English',
            genre: 'Action',
            director: 'Christopher Nolan',
            trailer: 'https://example.com/dark-knight-trailer.mp4',
            description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
            duration: 152,
            startDate: new Date('2024-10-01'),
            endDate: new Date('2024-10-31'),
            showtimes: ['showtimeId3', 'showtimeId4']
        },
        {
            _id: '3',
            title: 'Interstellar',
            image: 'https://example.com/interstellar.jpg',
            language: 'English',
            genre: 'Adventure, Drama, Sci-Fi',
            director: 'Christopher Nolan',
            trailer: 'https://example.com/interstellar-trailer.mp4',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
            duration: 169,
            startDate: new Date('2024-11-01'),
            endDate: new Date('2024-11-30'),
            showtimes: ['showtimeId5', 'showtimeId6']
        }
        // Add more movies as needed
    ];

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map(movie => (
                <Card
                    key={movie._id}
                    className="max-w-sm"
                    imgAlt={movie.title}
                    imgSrc={movie.image}
                >
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {movie.title}
                        </h5>
                    </a>
                    <p className="text-gray-700 dark:text-gray-400">
                        {movie.description}
                    </p>
                    <div className="mt-2 mb-2 flex items-center">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            Genre: {movie.genre}
                        </span>
                    </div>
                    <div className="mt-2 mb-2 flex items-center">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            Language: {movie.language}
                        </span>
                    </div>
                    <div className="mt-2 mb-2 flex items-center">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            Director: {movie.director}
                        </span>
                    </div>
                    <div className="mt-2 mb-2 flex items-center">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            Duration: {movie.duration} mins
                        </span>
                    </div>
                    <div className="mt-2 mb-2 flex items-center">
                        <a
                            href={movie.trailer}
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Watch Trailer
                        </a>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default DashMovies;
