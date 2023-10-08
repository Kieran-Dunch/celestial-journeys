import { useReducer } from 'react';
import { BookingContext } from './context/booking';
import { Details } from './Details';
import { PlanetsContext } from './context/planets';
import Planets from '../App/App';
import NavBar from "../NavBar";

function planetsReducer(state, action) {
  switch (action.type) {
    case 'SELECT_PLANET':
      return { ...state, selectedPlanet: action.payload }
    default:
      return state
  }
}

function bookingsReducer(state, action) {
  switch (action.type) {
    case 'SELECT_BOOKING':
      return { ...state, selectedBooking: action.payload }
    default:
      return state
  }
}

export default function Index() {
  const [planets, dispatch] = useReducer(planetsReducer, {})
  const [bookings, dispatchBookings] = useReducer(bookingsReducer, {})
  
  return (
    <PlanetsContext.Provider value={{ planets, dispatch }}>
      <BookingContext.Provider value={{ bookings, dispatch: dispatchBookings }}>
        <NavBar />
        <div>SATURN VIEW</div>
        <div className="flex-1 flex">
          <Details />
          {!bookings.selectedBooking && <Planets />}
          {bookings.selectedBooking && (
            <div>
              Details
            </div>
          )}
        </div>
      </BookingContext.Provider>
    </PlanetsContext.Provider>
  )
}
