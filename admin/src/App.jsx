import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard';
import CreateMovies from './components/CreateMovies';
import CreateReservation from './components/CreateReservation';
import CreateShowtimes from './components/CreateShowtimes';
import CreateTheatre from './components/CreateThearture';
import CreateUser from './components/CreateUser';
import DashUsers from './components/DashUsers';
import DashMovies from './components/DashMovies';
import DashTheatre from './components/DashTheature';
import Reservation from './components/Reservation';
import ShowTimes from './components/ShowTimes';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/create-movies" element={<CreateMovies />} />
          <Route path="/create-reservation" element={<CreateReservation />} />
          <Route path="/create-showtimes" element={<CreateShowtimes />} />
          <Route path="/create-theatre" element={<CreateTheatre />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/dashboard/users" element={<DashUsers />} />
          <Route path="/dashboard/movies" element={<DashMovies />} />
          <Route path="/dashboard/theatre" element={<DashTheatre />} />
          <Route path="/dashboard/reservation" element={<Reservation />} />
          <Route path="/dashboard/showtimes" element={<ShowTimes />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
