import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  let availableTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTime={availableTime} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('Expect correct time when time is changed', () => {
  let availableTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTime={availableTime} />);
  const dropDownElement = screen.getByTestId("select");
  fireEvent.change(dropDownElement, { target: { value: "18:00" } });
  let options = screen.getAllByTestId('select-option');
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
})

test('User is able to submit form', () => {
  let availableTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const onSubmit = jest.fn();

  render(<BookingForm availableTime={availableTime} onSubmit={onSubmit} />);
  const dateElement = screen.getByTestId("date");
  fireEvent.change(dateElement, { target: { value: "2023-01-06" } });
  const submitButton = screen.getByTestId("submit-button");
  fireEvent.click(submitButton);
  fireEvent.submit(screen.getByTestId("form"));

  expect(onSubmit).toHaveBeenCalledWith({
    date: "2023-01-06",
    time: "17:00",
    numberOfGuest: 1,
    occasion: "Birthday"
  });
})