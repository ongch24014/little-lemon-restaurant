import React, { useState } from 'react'

function BookingForm({ availableTime, dispatch }) {
  let [formState, setFormState] = useState({
    date: "",
    time: "17:00",
    numberOfGuest: 1,
    occasion: "Birthday"
  })

  const handleChange = (e, type) => {
    setFormState({
      ...formState,
      [type]: e.target.value
    })

    dispatch({ type: "anything" })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState)
  }

  return (
    <section className='booking-section'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={formState.date} onChange={(e) => { handleChange(e, "date") }} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={formState.time} onChange={(e) => { handleChange(e, "time") }}>
          {availableTime.map((time, i) => <option key={i}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={formState.numberOfGuest} onChange={(e) => { handleChange(e, "numberOfGuest") }} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formState.occasion} onChange={(e) => { handleChange(e, "occasion") }}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </section>
  )
}

export default BookingForm