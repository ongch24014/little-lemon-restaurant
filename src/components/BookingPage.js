import React, { useReducer } from 'react'
import BookingForm from './BookingForm';

function BookingPage() {
  const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const updateTimes = (state, action) => {
    console.log('dispatched', action)
    return state
  }
  const [availableTime, dispatch] = useReducer(updateTimes, initializeTimes);

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <section>
      <BookingForm availableTime={availableTime} dispatch={dispatch} onSubmit={handleSubmit} />
    </section>
  )
}

export default BookingPage