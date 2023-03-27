import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import StackFilter from "./StackFilter"

export default function StackWidget() {

    const icons = [
        {name: "html.png", stack: 1}, 
        {name: "css.png", stack: 1}, 
        {name: "js.png", stack: 1}, 
        {name: "tailwind.png", stack: 1}, 
        {name: "typescript.png", stack: 1},
    
        {name: "python.png", stack: 2}, 
        {name: "mysql.png", stack: 2},
        {name: "trpc.png", stack: 2},
        {name: "mongodb.png", stack: 2}, 
    
        {name: "react.png", stack: 3}, 
        {name: "flask.png", stack: 3}, 
        {name: "next.png", stack: 3}, 
    ]

    const [skillTypes, setSkillTypes] = useState(0)
    const [allIcons, setAllIcons] = useState([])
    const [filteredIcons, setFilteredIcons] = useState([])

    useEffect(() => {
        setAllIcons(icons)
        setFilteredIcons(icons)
    }, [])

    return (
        <div>
            <StackFilter skillTypes={skillTypes} setSkillTypes={setSkillTypes} allIcons={allIcons} setFilteredIcons={setFilteredIcons} />

            <motion.div layout className="flex flex-wrap gap-8 justify-center py-2">
                <AnimatePresence>
                    { filteredIcons.map((icon, i) =>  {
                        return <motion.img layout animate={{opacity: 1}}  exit={{opacity: 0}} initial={{opacity: 0}} key={i} src={icon.name} alt="" width={56}/>
                    })}
                </AnimatePresence>

            </motion.div>
        </div>
    )
}