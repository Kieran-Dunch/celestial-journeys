import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import saturnImg from '../../assets/images/saturn_false.jpg';
import saturnImg2 from '../../assets/images/image-Hubble-Space-Telescope-Saturn-moons-shadow.webp';
import saturnImg3 from '../../assets/images/Image-Enceladus-moon-south-pole-Saturn-orbiter-July-14-2005.webp';
import saturnImg4 from '../../assets/images/Image-Saturn-radio-occultation-observation-planet-Cassini-2005.webp';
import spaceshipImg from '../../assets/images/spaceship-theme-dz14 1.png';
import mimasImg from '../../assets/images/Image-Mimas-atmosphere-Saturn-Cassini-camera-2006.png';
import saturnImg5 from '../../assets/images/saturn_rings4 1.png';
import bookBanner from '../../assets/images/Frame 17 1.png';
import './details-information-styles.css'

const NAVBAR_HEIGHT = 70

export function DetailsInformation() {
  const containerRef = useRef(null)

  const { scrollYProgress, scrollY } = useScroll({
    container: containerRef
  })

  const [translateY, setTranslateY] = useState('0')

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setTranslateY(`${Math.min(latest * 750, 100)}px`)
  })


  const opacity = useTransform(scrollY, [0, 150], [0, 1])

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
        <div className="flex items-center justify-center absolute left-0 right-0 top-0">
          <h2 className="text-4xl flex-1 p-4 text-[34px] text-[#C3EDDF]">The Saturnian Ring Odyssey</h2>
        </div>
        <img src={saturnImg} className="w-full h-full object-cover" alt="" />
        <motion.div style={{ opacity, transform: `translateY(${translateY})` }} className={`z-10 w-[320px] right-[10%] absolute translate-y-[25%] bottom-0 rounded card-gradient p-6`}>
          <p className="font-bold text-xl">Explore the rings of Saturn on this beautiful 4-night cruise</p>
          <ul className="mt-2 text-base list-disc">
            <li>$5000 CAD</li>
            <li>4 nights</li>
            <li>2 persons</li>
            <li>Pet friendly</li>
          </ul>
          <p className="mt-2 text-base">
            Embark on a beautiful space cruise to the rings of Saturn themselves! Although mystifying from a distance, You will see that there is even more beauty to discover by looking up close.
          </p>
          <button className="rounded bg-black text-center text-white py-2 w-full">Book</button>
        </motion.div>
      </div>
      <div className="bg-white mt-24">
        <motion.div
          initial={{ transform: 'translateY(-100px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
          }}
        >
          <p className="text w-3/6 mx-auto text-center bg-white text-2xl">Ringed Splendor... We will begin by exploring the rings of Saturn from a distance. Bring your camera! The chance to grab photos will make all your other friends jealous! Saturn’s rings span nearly 282 000 kilometers, so this will be the only way be can view in all their splendour.</p>
        </motion.div>
        <div className="flex gap-4 justify-center mt-12">
          <motion.div
            initial={{ transform: 'translate(-200px)', opacity: 0 }}
            whileInView={{ transform: 'translate(0)', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
          >
            <img src={saturnImg4} alt="" />
          </motion.div>
          <motion.div
            initial={{ transform: 'translate(200px)', opacity: 0 }}
            whileInView={{ transform: 'translate(0)', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
          >
            <img src={saturnImg3} alt="" />
          </motion.div>
        </div>
        <motion.div
          initial={{ transform: 'translateY(-100px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.3
          }}
        >
          <p className="text w-3/6 mx-auto text-center bg-white mt-36 text-[34px]">Get a sense of the majestic planet Saturn from a distance, which is 9 times the size of earth!</p>
        </motion.div>
        <div className="relative">
          <div
            className="mt-24"
          >
            <img src={saturnImg2} className="w-full" alt="" />
          </div>
          <motion.div
            initial={{ transform: 'translateY(-200px)', opacity: 0 }}
            whileInView={{ transform: 'translateY(0)', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
          >
            <p
              className="text-white text-lg w-[580px] right-[150px] bottom-[20px] absolute"
            >
              Day 2: voyage through the stars
              <br />
              Travel through the solar system in our brilliant luxury space-liner, the SS Ringleader, a state-of-the-art spacecraft designed ideally for navigating saturn’s rings.
            </p>
          </motion.div>
        </div>
        <div className="w-[75%] mx-auto">
          <motion.div
            className="mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
          >
            <img src={spaceshipImg} className="mx-auto w-full" alt="" />
          </motion.div>
          <p className="mt-48 text w-3/6 mx-auto text-center text-xl">
            Some of the main features of the craft include a strong hull to withstand the space debris that makes up Saturn’s rings, and an engine system built with maneuverability in mind, to make ring travel as versatile as possible.
          </p>
          <div className="flex justify-around mt-48">
            <motion.div
              className="w-[390px] text-left text-xl"
              initial={{ transform: 'translateX(-200px)', opacity: 0 }}
              whileInView={{ transform: 'translateX(0)', opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <img src={mimasImg} className="w-full" alt="" />
              <p className="mt-4">Day 3: Asteroid hopping. Need I say any more? Spend this day moving between the rings of saturn, and exploring them up close! </p>
            </motion.div>
            <motion.div
              className="w-[390px] text-left text-xl mt-72"
              initial={{ transform: 'translateY(200px)', opacity: 0 }}
              whileInView={{ transform: 'translateY(0)', opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <img src={saturnImg5} className="w-full" alt="" />
              <p className="mt-4">
                The SS Ringleader will find ideal asteroids for you to explore, and don’t forget- The whole experience will be in a zero-gravity environment! Don your space suit and enjoy swimming in the stars!*
                <br />
                <br />
                <span className="italic text-base">*Celestial Journeys and Affiliates are not responsible for injuries sustained exterior of the star craft.</span>
              </p>
            </motion.div>
          </div>
          <motion.div
            className="rounded relative my-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
          >
            <div className="flex absolute top-0 right-0 bottom-0 left-0 justify-between items-center">
              <div className="text-white w-[305px] font-bold ml-4 text-xl">
                Explore the rings of Saturn on this beautiful 4-night cruise
              </div>
              <div className="mr-4">
                <button className="rounded bg-black text-center text-white p-2 w-full font-bold text-lg">Book - $5000 CAD</button>
              </div>
            </div>
            <img src={bookBanner} className="h-[108px] w-full object-fit-cover" alt="" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
