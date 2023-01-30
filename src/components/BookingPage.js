import React, { useReducer } from 'react'
import { fetchAPI, submitAPI } from '../api';
import BookingForm from './BookingForm';

function BookingPage() {
  let initializeTimes = fetchAPI(new Date(Date.now()))

  const updateTimes = (state, action) => {
    if (action.type == "date") {
      const newDate = fetchAPI(new Date(action.date))
      state = newDate;
    }
    return state
  }

  const [availableTime, dispatch] = useReducer(updateTimes, initializeTimes);

  const handleSubmit = (e) => {
    const result = submitAPI(e);
    console.log(result);
  };

  return (
    <section>
      <BookingForm availableTime={availableTime} dispatch={dispatch} onSubmit={handleSubmit} />
    </section>
  )
}

export default BookingPage