import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
function Project() {
  return (
    <>
    <div>
     <motion.h2
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y: -100}}
       transition={{duration: 0.5}}
     className='text-4xl my-20 text-center'>Projects</motion.h2>
     <div>
        {PROJECTS.map((value, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center' >
                    <motion.div
                      whileInView={{opacity:1, x:0}}
                      initial={{opacity:0, x: -100}}
                      transition={{duration: 1}}
                    className='w-full lg:w-1/4'>
                    <img width={150} height={150} src={value.image} className='mb-6 rounded' alt={value.title} />
                    </motion.div>
                    <motion.div
                      whileInView={{opacity:1, x:0}}
                      initial={{opacity:0, x: 100}}
                      transition={{duration: 1}}
                    className='w-full lg:w-3/4 max-w-xl'>
                        <h6 className='mb-6 font-semibold'> {value.title} </h6>
                        <p className='mb-4 text-neutral-400'> {value.description} </p>
                        {value.technologies.map((value, index) => (
                            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 hover:bg-purple-100 cursor-context-menu text-sm font-medium text text-purple-800'>
                              {value}
                            </span>
                        ))}
                    </motion.div>
            </div>
        ))}
     </div>
    </div>
    </>
  )
}

export default Project