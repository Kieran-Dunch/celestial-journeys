import video from '../assets/Galaxy_Motion_Background_Video_HD__FREE.mp4'

import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row align-items-center justify-content-flex-start h-100">
          <div className="text-light col-6">
            <h1>Embark on a cosmic odyssey.</h1>
            <p>Explore the Solar System's wonders, create your adventure & journey beyond the stars!</p>
            <Link to="/index" className="btn btn-light">Explore Destinations</Link>
          </div>
        </div>
      </div>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
    </>
  )
}
