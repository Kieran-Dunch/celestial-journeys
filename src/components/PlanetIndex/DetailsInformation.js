import { useContext } from 'react'
import { motion } from 'framer-motion'
import { PlanetsContext } from './context/planets';
import { BookingContext } from './context/booking';

const NAVBAR_HEIGHT = 70

export function DetailsInformation () {
  const { dispatch } = useContext(BookingContext)
  const { dispatch: planetsDispatch } = useContext(PlanetsContext)
  
  return (
    <motion.div
      className="bg-white flex-1 text-left p-4"
      initial={{ transform: 'translateX(500px)', position: 'fixed', top: NAVBAR_HEIGHT, bottom: 0, left: 0, right: 0 }}
      animate={{
        transform: 'translate(0)',
        transitionEnd: {
          position: "static",
        },
      }}
      transition={{
        duration: 0.3
      }}
    >
      <div className="flex items-center">
        <h2 className="text-4xl flex-1">Details Page</h2>
        <button onClick={() => {
          dispatch({ type: 'SELECT_BOOKING', payload: null })
          planetsDispatch({ type: 'SELECT_PLANET', payload: null })
        }}>X</button>
      </div>
    </motion.div>
  )
}
