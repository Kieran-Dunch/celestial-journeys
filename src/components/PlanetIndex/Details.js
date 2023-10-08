import { useContext } from 'react';
import { motion } from 'framer-motion';
import { BookingContext } from './context/booking';  
import { PlanetsContext } from './context/planets';
import { planetsData } from './planets-data'
import saturnImg from '../../assets/images/saturn_false.jpg';
import frame18Img from '../../assets/images/Frame 18.png';
import frame20Img from '../../assets/images/Frame 20.png';
import frame21Img from '../../assets/images/Frame 21.png';
import giphy from '../../assets/images/giphy.gif';

export function Details() {
  const { planets, dispatch } = useContext(PlanetsContext)
  const { bookings, dispatch: dispatchBooking } = useContext(BookingContext) 
  const planet = planetsData[planets.selectedPlanet]
  
  if (!planet || bookings.selectedBooking) {
    return null
  }
  
  return (
    <motion.div
      className="p-2 bg-white text-left w-[640px] absolute top-0 bottom-0 overflow-auto flex flex-column"
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

      {planets.selectedPlanet === 'saturn' ? (
        <div className="grid grid-cols-2 gap-2 flex-1">
          {[
            ['The Saturnian Ring Odyssey', saturnImg],
            ['Encounter Enigmatic Moons', frame18Img],
            ['Interstellar Escape', frame20Img],
            ['Orbit Safari', frame21Img],
          ].map(([title, img]) => (
            <div
              key={title}
              className="cursor-pointer"
              onClick={() => dispatchBooking({ type: 'SELECT_BOOKING', payload: true })}
            >
              <img src={img} className="h-[330px] w-full rounded object-fit-cover" />
              <p className="font-bold text-base mt-3">{ title }</p>
            </div>
          ))}
        </div>
      ) : (
          <div className="h-full flex items-center justify-center">
            <div>
              <img src={giphy} className="mx-auto block" alt=""/>

              <div className="text-xl mt-4">
                {planet.title} is currently off the grid, but <span className="underline text-blue-500 cursor" role="button" onClick={() => dispatch({ type: 'SELECT_PLANET', payload: 'saturn' })}>Saturn</span> is shining bright and ready for your cosmic adventure! 🚀🌟
              </div>
            </div>
          </div>
        )}
    </motion.div>
  )
}
