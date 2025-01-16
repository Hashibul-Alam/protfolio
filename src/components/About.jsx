import about  from "../assets/new.jpg";
import { ABOUT_TEXT } from '../constants';
import {motion } from "motion/react"

function About() {
  return (
    <>
    <div className='border-b border-neutral-800 pb-4'>
        <motion.h2
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y: -100}}
          transition={{duration: 0.5}}
        className='text-4xl my-20 text-center'>About <span className='text-pink-500'>Me</span></motion.h2>

        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flrx justify-center items-center'>
                <img className="rounded-2xl" src={about} alt="about" />
                </div>
            </motion.div>
            <motion.div
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:100}}
             transition={{duration:1}}
            className='w-full lg:w-1/2 md:mt-20'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='lg:py-16 py-5 my-2 max-w-xl'> {ABOUT_TEXT} </p>
                </div>
            </motion.div>
            <div>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default About