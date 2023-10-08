import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from 'react-bootstrap'
import { BookingContext } from './context/booking';  
import { PlanetsContext } from './context/planets';
import { planetsData } from './planets-data'
import img from "../../assets/images/planet-earth.svg"

export function Details() {
  const { planets, dispatch } = useContext(PlanetsContext)
  const { bookings, dispatch: dispatchBooking } = useContext(BookingContext) 
  const planet = planetsData[planets.selectedPlanet]
  
  if (!planet) {
    return null
  }
  
  return (
    <motion.div
      className="p-2 bg-white text-left"
      initial={{ width: 0 }}
      animate={{ width: '50vw' }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15
      }}
    >
      <div className="flex">
        <h2 className="text-3xl flex-1">{planet.title}</h2>
        <button onClick={() => {
          dispatch({ type: 'SELECT_PLANET', payload: null })
          dispatchBooking({ type: 'SELECT_BOOKING', payload: null })
        }}>X</button>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {[{ title: 'Attraction 1' }, { title: 'Attraction 2' }, { title: 'Attraction 3' }].map(({ title }) => (
          <Card>
            <Card.Img className="p-4" variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Quick description
              </Card.Text>
              <Button variant="primary" onClick={() => dispatchBooking({ type: 'SELECT_BOOKING', payload: true })}>Book</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
