import { CONTACT } from '../constants'
import { motion } from "framer-motion"

function Contact() {
  return (
    <>
    <div className='border-t border-pink-900 pb-20'>
    <motion.h2
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 0.5}}
    className='text-4xl my-10 text-center'>Get in Touch</motion.h2>
    <div className='text-center tracking-tighter'>
        <motion.p
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration: 1}}
        className='my-4'>{CONTACT.address} </motion.p>
        <motion.p
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: 100}}
          transition={{duration: 1}}
        className='my-4'>{CONTACT.phoneNo} </motion.p>
        <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1}}
        >
        <a className='border-b' href="#">{CONTACT.email} </a>
        </motion.div>
    </div>
    </div>
    </>
  )
}

export default Contact