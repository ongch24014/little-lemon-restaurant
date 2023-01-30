import React, { useEffect, useReducer } from 'react'
import { fetchAPI, submitAPI } from '../api';
import BookingForm from './BookingForm';
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  function useHandleSubmit(e) {
    const result = submitAPI(e);
    if (result == true) {
      navigate("/bookingConfirmed");
    }
  }

  return (
    <section>
      <BookingForm availableTime={availableTime} dispatch={dispatch} onSubmit={useHandleSubmit} />
    </section>
  )
}

export default BookingPage