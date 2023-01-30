import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/bookingConfirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
