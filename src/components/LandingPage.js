import video from '../assets/Galaxy_Motion_Background_Video_HD__FREE.mp4'

import Carousel from 'react-bootstrap/Carousel'

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
        <div className="carousel text-light">
          <Carousel>
            <Carousel.Item>
              <p>LOL</p>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <p>SECOND SLIDE</p>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <p>THIRD SLIDE</p>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
    </>
  )
}
