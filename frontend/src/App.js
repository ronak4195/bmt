import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/Home/DashBoard';
import HomePage from './Pages/Home/HomePage';
import CreateMovies from './Components/CreateMovies';
import CreateReservation from './Components/CreateReservation';
import CreateShowtimes from './Components/CreateShowtimes';
import CreateTheatre from './Components/CreateThearture';
import CreateUser from './Components/CreateUser';
import DashUsers from './Components/DashUsers';
import DashMovies from './Components/DashMovies';
import DashTheatre from './Components/DashTheature';
import Reservation from './Components/Reservation';
import ShowTimes from './Components/ShowTimes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
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
      </div>
    </Router>
  );
}

export default App;
