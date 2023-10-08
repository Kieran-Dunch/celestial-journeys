import { useReducer } from 'react';
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

export default function Index() {
  const [planets, dispatch] = useReducer(planetsReducer, {})
  
  return (
    <PlanetsContext.Provider value={{ planets: planets, dispatch }}>
      <NavBar />
      <div>SATURN VIEW</div>
      <div className="flex-1 flex">
        <Details />
        <Planets />
      </div>
    </PlanetsContext.Provider>
  )
}
