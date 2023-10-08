import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from 'react-bootstrap'
import { BookingContext } from './context/booking';  
import { PlanetsContext } from './context/planets';
import { planetsData } from './planets-data'
import saturnImg from '../../assets/images/saturn_false.jpg';

export function Details() {
  const { planets, dispatch } = useContext(PlanetsContext)
  const { bookings, dispatch: dispatchBooking } = useContext(BookingContext) 
  const planet = planetsData[planets.selectedPlanet]
  
  if (!planet || bookings.selectedBooking) {
    return null
  }
  
  return (
    <motion.div
      className="p-2 bg-white text-left w-[50vw] absolute top-0 bottom-0"
      initial={{ transform: 'translateX(-200px)' }}
      animate={{ transform: 'translate(0)' }}
      transition={{
        duration: 0.3
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
        {planets.selectedPlanet === 'saturn' ? (
          <Card>
            <Card.Img className="p-4" variant="top" src={saturnImg} />
            <Card.Body>
              <Card.Title>Saturn</Card.Title>
              <Card.Text>
                The Saturnian Ring Odyssey
              </Card.Text>
              <Button variant="primary" onClick={() => dispatchBooking({ type: 'SELECT_BOOKING', payload: true })}>Book</Button>
            </Card.Body>
          </Card>
        ) : (
          <div>
            <div className="text-xl">{planet.title} is not available for tourism yet!</div>
            <div className="text-xl">
              Try&nbsp;
              <span className="underline text-blue-500 cursor" role="button" onClick={() => dispatch({ type: 'SELECT_PLANET', payload: 'saturn' })}>Saturn</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
