import video from '../assets/Galaxy_Motion_Background_Video_HD__FREE.mp4'

import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row align-items-center justify-content-flex-start h-100">
          <div className="text-light col-6">
            <h1 className='display-1 text-left ml-6'><strong>Embark on a cosmic odyssey</strong></h1>
            <h2 className='text-left ml-6'>Explore the Solar System's wonders, create your adventure & journey beyond the stars!</h2>
            <div className="text-left m-6">
              <Link to="/index" className="btn btn-light btn-lg" style={{ padding: 20 }}><strong>Explore Destinations</strong></Link>
            </div>
          </div>
        </div>
      </div>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
    </>
  )
}
