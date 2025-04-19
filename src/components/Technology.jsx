import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { SiBootstrap } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion"

const iconVariants = (duration)=>({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType:"reverse"
        },
    },
})

function Technology() {
  return (
    <>
    <div className='border-b border-neutral-800 pb-24'>
    <motion.h2 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y: -100}}
       transition={{duration: 1.5}}
    className='text-4xl my-20 text-center'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1.5}}
        
        className='flex flex-wrap items-center justify-center gap-8'>
            <motion.div
            variants={iconVariants(2.5)}
            initial = "initial"
            animate= "animate"
            className='rounded-2xl border-2 hover:border-white  border-neutral-800 p-1'>
                <SiNextdotjs className='text-4xl'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial = "initial"
            animate= "animate"
            className='rounded-2xl border-2 hover:border-cyan-500  border-neutral-800 p-1'>
                <RiReactjsLine className='text-4xl text-cyan-400 '/>
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial = "initial"
              animate= "animate"
            className='rounded-2xl hover:border-[#E8D44D] border-2 border-neutral-800 p-1'>
                <RiJavascriptFill className='text-4xl text-[#E8D44D]'/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial = "initial"
              animate= "animate"
            className='rounded-2xl hover:border-[#38BDF8] border-2 border-neutral-800 p-1'>
                <TbBrandTailwind className='text-4xl text-[#38BDF8]'/>
            </motion.div>
            <motion.div
              variants={iconVariants(2)}
              initial = "initial"
              animate= "animate"
            className='rounded-2xl border-2 hover:border-[#7910F2] border-neutral-800 p-1'>
                <SiBootstrap className='text-4xl text-[#7910F2]'/>
            </motion.div>
            <motion.div
              variants={iconVariants(6)}
              initial = "initial"
              animate= "animate"
            className='rounded-2xl border-2 hover:border-teal-700 border-neutral-800 p-1'>
                <SiNextui className='text-4xl text-teal-700'/>
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial = "initial"
              animate= "animate"
            className='rounded-2xl border-2 hover:border-[#DD4B25] border-neutral-800 p-1'>
                <TiHtml5 className='text-4xl text-[#DD4B25]'/>
            </motion.div>
        </motion.div>
    </div>
    </>
  )
}

export default Technology