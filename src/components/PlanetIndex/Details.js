import { useContext } from 'react';
import { motion } from 'framer-motion';
import { PlanetsContext } from './context/planets';
import { planetsData } from './planets-data'

export function Details() {
  const { planets, dispatch } = useContext(PlanetsContext)
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
        <h2 className="text-xl flex-1">{planet.title}</h2>
        <button onClick={() => dispatch({ type: 'SELECT_PLANET', payload: null })}>X</button>
      </div>
    </motion.div>
  )
}
