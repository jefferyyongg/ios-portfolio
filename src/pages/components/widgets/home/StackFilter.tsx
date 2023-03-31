import { ImEmbed } from "react-icons/im"
import { HiDatabase } from "react-icons/hi"
import { SlFrame } from "react-icons/sl"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function StackFilter({skillTypes, setSkillTypes, allIcons, setFilteredIcons}: any) {

    useEffect(() => {
        if(skillTypes === 0) {
            setFilteredIcons(allIcons)
            return;
        }

        const filteredIcons = allIcons.filter((item: { stack: any }) => item.stack === skillTypes)
        setFilteredIcons(filteredIcons)

    },[skillTypes, allIcons, setFilteredIcons])

    return (
        <div>
            <div className="flex justify-center py-2">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    onClick={() => setSkillTypes(0)}
                    className={skillTypes === 0 ? "bg-[#646464] dark:bg-[#acacac] rounded-xl p-2 text-3xl font-bold" : "bg-[#252525] dark:bg-[#acacac] rounded-xl p-2 text-3xl font-bold"}>
                        Skills
                </motion.button>    
            </div>

            <div className="flex justify-around gap-4 py-4">
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onClick={() => setSkillTypes(1)}
                className={ skillTypes === 1 ? "bg-[#646464] dark:bg-[#acacac] rounded-xl p-1" : "bg-[#252525] dark:bg-[#acacac] rounded-xl p-1"}>
        
                    <ImEmbed size={40}/>

                </motion.button>

                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onClick={() => setSkillTypes(2)}
                className={ skillTypes === 2 ? "bg-[#646464] dark:bg-[#acacac] rounded-xl p-1" : "bg-[#252525] dark:bg-[#acacac] rounded-xl p-1"}>
                
                    <HiDatabase size={40}/>

                </motion.button>

                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onClick={() => setSkillTypes(3)}
                className={ skillTypes === 3 ? "bg-[#646464] dark:bg-[#acacac] rounded-xl p-1" : "bg-[#252525] dark:bg-[#acacac] rounded-xl p-1"}>
                
                    <SlFrame size={40}/>

                </motion.button>
            </div>
        </div>
    )
}