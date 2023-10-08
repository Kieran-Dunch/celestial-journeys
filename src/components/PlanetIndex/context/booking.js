import { createContext } from 'react'

export const BookingContext = createContext({
  bookings: {
    selectedBooking: null
  },
  dispatch: () => {}
}) 
