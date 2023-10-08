import { useContext, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { PlanetsContext } from './context/planets';
import { BookingContext } from './context/booking';
import img from '../../assets/images/planet-earth.svg';
import saturnImg from '../../assets/images/saturn_false.jpg';
import saturnImg2 from '../../assets/images/image-Hubble-Space-Telescope-Saturn-moons-shadow.webp';
import saturnImg3 from '../../assets/images/Image-Enceladus-moon-south-pole-Saturn-orbiter-July-14-2005.webp';
import saturnImg4 from '../../assets/images/Image-Saturn-radio-occultation-observation-planet-Cassini-2005.webp';
import './details-information-styles.css'

const NAVBAR_HEIGHT = 70

export function DetailsInformation () {
  const { dispatch } = useContext(BookingContext)
  const { dispatch: planetsDispatch } = useContext(PlanetsContext)
  const containerRef = useRef(null)
  
  const { scrollYProgress, scrollY } = useScroll({
    container: containerRef
  })
  
  const [opacity, setOpacity] = useState(0)
  const [translateY, setTranslateY] = useState('0')

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setOpacity(latest * 5.5)
    setTranslateY(`${Math.min(latest * 350, 100)}px`)
  })
  
  
  const parallax = useTransform(scrollY, [0, containerRef.current?.scrollHeight], [0, 200])
  
  return (
    <motion.div
      ref={containerRef}
      className="bg-white flex-1 text-left overflow-auto"
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
      <div className="relative details-information-container">
        <div className="flex items-center absolute left-0 right-0 top-0">
          <h2 className="text-4xl flex-1 p-4">Details Page</h2>
          <button onClick={() => {
            dispatch({ type: 'SELECT_BOOKING', payload: null })
            planetsDispatch({ type: 'SELECT_PLANET', payload: null })
          }}>X</button>
        </div>
        <img src={saturnImg} className="w-full h-full object-cover" alt=""/>
        <motion.div style={{ opacity, transform: `translateY(${translateY})` }} className={`z-10 w-[320px] right-[10%] absolute translate-y-[25%] bottom-0 rounded card-gradient p-2`}>
          <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequuntur dignissimos dolorem dolores doloribus</p>
          <ul className="mt-2">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus labore nobis nulla obcaecati placeat? Corporis earum fugit impedit iusto repellendus reprehenderit ullam. Ad dignissimos eligendi illo molestias voluptatem. Architecto!
          </p>
          <button className="rounded bg-black text-center text-white py-2 w-full">Book</button>
        </motion.div>
      </div>
      <div className="bg-white mt-24">
        <p className="text w-3/6 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aspernatur assumenda autem beatae consequatur consequuntur distinctio, dolore ducimus eaque, explicabo incidunt magnam nostrum provident quo tempora? Doloremque fuga molestias quis?</p>
        <motion.div style={{ transform: `translateY(${parallax.get() - 50}px)` }} className="flex gap-4 justify-center mt-24">
          <motion.div
            initial={{ transform: 'translate(-200px)', opacity: 0 }}
            whileInView={{ transform: 'translate(0)', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 1
            }}
          >
            <img src={saturnImg4} alt=""/>
          </motion.div>
          <motion.div
            initial={{ transform: 'translate(200px)', opacity: 0 }}
            whileInView={{ transform: 'translate(0)', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.5
            }}
          >
            <img src={saturnImg3} alt=""/>
          </motion.div>
        </motion.div>
        <p className="mt-24 text w-3/6 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aspernatur assumenda autem beatae consequatur consequuntur distinctio, dolore ducimus eaque, explicabo incidunt magnam nostrum provident quo tempora? Doloremque fuga molestias quis?</p>
        <motion.div
          className="mt-24"
          style={{ transform: `translateY(${parallax.get() - 100}px)` }}
        >
          <img src={saturnImg2} alt=""/>
        </motion.div>
      </div>
    </motion.div>
  )
}
