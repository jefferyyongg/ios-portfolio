import React, { useState, } from 'react'
import { motion, AnimatePresence } from "framer-motion"


export default function InfoWidget() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
        <AnimatePresence>
            {isOpen && (
            <motion.div
                layout
                initial={{ opacity: 0, display: "none" }}
                animate={{ opacity: 1, display: "block", zIndex: 50 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="bg-white bg-opacity-5 shadow-lg backdrop-filter backdrop-blur-md absolute min-h-full min-w-full z-0 top-0 left-0"
            />
            )}
        </AnimatePresence>

        <motion.div
            whileHover={{ scale: isOpen ? 1: 1.025}} 
            animate={{width: isOpen ? "1050px" : "613px", x: isOpen ? 100 : 0, height : isOpen ? "800px" : "302px", y: isOpen ? 80 : 0}}
            transition={{layout: { duration: 0.4 }}}
            layout
            onClick={() => setIsOpen(!isOpen)} 
            className='absolute bg-[#333333] dark:bg-[#f3f3f3] dark:text-black text-white rounded-3xl p-8 z-50 select-none'>
            

            <motion.h1 layout className="font-bold text-6xl text-center p-6 text-transparent bg-clip-text bg-gradient-to-r from-[#c869ff] to-[#56ff80]">Jeffery Yong</motion.h1>
            
            {isOpen ? (
                <motion.div
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration: 0.5}}
                >   
                    <p className='font-medium text-3xl text-left py-16'>I specialize in web development using the latest technologies, including HTML, Tailwind, React, and Next.js. I also use tRPC for type-safe routing to ensure that my code is both efficient and secure.
                    One of my favorite tools for creating engaging and dynamic websites is Framer Motion, a powerful yet simple motion library for React. With Framer Motion, I can create animations that make my websites come to life and provide a seamless user experience.
                    If youre looking for a skilled and passionate developer to help you take your business to the next level, Id love to hear from you. Please feel free to reach out to me via my website portfolio app, where you can see some examples of my work and get in touch with me directly.
                    </p>
        </motion.div>
            ) : (
                <>  
                    <motion.h2 className="font-semibold text-xl text-center">Self-taught full-stack developer from The Netherlands</motion.h2>
                    <motion.p className="text-center py-2">Hey! Im Jeffery, and my goal is to work at a company where I can deliver business value while levelling up my skills as a developer. </motion.p>
                </>   
            )
            }
        
    </motion.div>
    </>
  )
}