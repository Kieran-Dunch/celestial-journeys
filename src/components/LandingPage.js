import saturn from './saturn.jpg'

import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row align-items-center ">
          <div className="text-light col-6">
            <h1>Embark on a cosmic odyssey.</h1>
            <p>Explore the Solar System's wonders, create your adventure & journey beyond the stars!</p>
            <Link to="/index" className="btn btn-light">Explore Destinations</Link>
          </div>
          <img src={saturn} alt="Saturn" id="saturn-logo" className='col-6 App-logo' />
        </div>
      </div>
    </>
  )
}
