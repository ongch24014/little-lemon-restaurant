import React, { useState } from 'react'

function BookingForm({ availableTime, dispatch, onSubmit }) {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const today = `${date.getFullYear()}-${currentMonth / 10 > 1 ? currentMonth : "0" + currentMonth}-${date.getDate()}`;
  let [formState, setFormState] = useState({
    date: today,
    time: "17:00",
    numberOfGuest: 1,
    occasion: "Birthday"
  })

  const handleChange = (e, type) => {
    setFormState({
      ...formState,
      [type]: e.target.value
    })

    if (dispatch) {
      dispatch({ type, date: e.target.value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  }

  function getIsFormValid() {
    if (formState.numberOfGuest < 1) {
      return false;
    }
    return true
  }

  return (
    <section className='booking-section'>
      <form onSubmit={handleSubmit} data-testid="form">
        <h1>Book Now</h1>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" data-testid="date" value={formState.date} onChange={(e) => { handleChange(e, "date") }} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" data-testid="select" value={formState.time} onChange={(e) => { handleChange(e, "time") }}>
          {availableTime.map((time, i) => <option data-testid="select-option" key={i}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="0" max="10" id="guests" data-testid="guests" value={formState.numberOfGuest} onChange={(e) => { handleChange(e, "numberOfGuest") }} />
        {formState.numberOfGuest < 1 && <span>Number of guests must be more than 0.</span>}
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formState.occasion} onChange={(e) => { handleChange(e, "occasion") }}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" data-testid="submit-button" disabled={!getIsFormValid()} />
      </form>
    </section>
  )
}

export default BookingForm