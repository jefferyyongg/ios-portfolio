import { type NextPage } from "next";
import { useEffect, useState, createContext } from "react";
import { motion } from "framer-motion";
import HomePage from "./components/HomePage";
import React from "react";

export const ThemeContext = React.createContext(false);

const Home: NextPage = () => {

  const navTypes = ["Home", "Projects", "Socials", "Contact"];
  const [active, setActive] = useState(navTypes[0]);
  
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    {isOn ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")}
  }, [isOn])

  return (
      <div className="flex flex-col bg-[#1d1d1d] dark:bg-[#a1a1a1] transition duration-200 container relative min-w-full">
          <header className="flex p-8 justify-around items-center text-white font-medium">
        
            <motion.button 
            className="flex w-[50px] h-[28px] items-center px-0.5 bg-[#8f8f8f] dark:bg-[#80ff91] rounded-full"
            style={ isOn ? { justifyContent: "end"} : { justifyContent: "start"}}
            onClick={() => setIsOn(!isOn)}>
            
              <motion.div 
              layout 
              className="w-[24px] h-[24px] bg-[#ffffff] rounded-2xl"
              />

            </motion.button>

            <nav>
              <ul className="rounded-full bg-[#161616] dark:bg-[#8b8b8b] p-1">
                {
                  navTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setActive(type)}
                      className={
                        active === type
                        ? "bg-[#646464] dark:bg-[#3d3d3d] mx-2 my-1 pb-1 px-2 rounded-full transition duration-150 ease-in"
                          : "text-white dark:text-black mx-2 my-1 pb-1 px-2 rounded-full transition duration-150 hover:opacity-50 dark:hover:text-white dark:duration-150"
                      }
                    >
                      {type}
                    </button>
                  ))
                }
              </ul>
            </nav>
            <a>time widget</a>
          </header>
                
          

        <ThemeContext.Provider value={isOn}>
          <div className="w-[1250px] min-h-screen mx-auto pt-8">
            {active === "Home" && <HomePage />}
          </div>
        </ThemeContext.Provider>
      </div>
  );
};

export default Home;