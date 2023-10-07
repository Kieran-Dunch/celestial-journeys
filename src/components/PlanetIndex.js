import Planets from './App/App';
import NavBar from "./NavBar";

export default function PlanetIndex() {
  return (
    <>
      <NavBar />
      <div>SATURN VIEW</div>
      <div className="flex-1">
        <Planets />
      </div>
    </>
  )
}
