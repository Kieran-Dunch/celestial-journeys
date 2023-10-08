import { createContext } from 'react'

export const PlanetsContext = createContext({
  planets: {
    selectedPlanet: null
  },
  dispatch: () => {}
}) 
