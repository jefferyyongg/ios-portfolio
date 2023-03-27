import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight} from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { useState } from "react";

export default function HomePictures ({children: slides}: any) {
    const [slide, setSlide] = useState(0);

    const prev = () => {
        setSlide((slide) => (slide === 0 ? slides.length - 1 : slide - 1))
    }

    const next = () => {
        setSlide((slide) => (slide === slides.length - 1? 0 : slide + 1))
    }

    return (
        <>
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${slide * 100}%)`}}>{slides}</div>
                <div className="absolute inset-0 flex justify-between items-end p-4 z-10">
                    <button className="rounded-full bg-black opacity-50 p-1 hover:opacity-80 transition duration-250" onClick={prev}>
                        <FiChevronLeft size={26}/>
                    </button>
                    <button className="rounded-full bg-black opacity-50 p-1 hover:opacity-80 transition duration-250" onClick={next}>
                        <FiChevronRight size={26}/>
                    </button>
            </div>
            <div className="absolute flex inset-0 items-end justify-center">
                {slide === 0 ? <BsDot size={44} style={{color: "white"}} className="transition ease-in-out duration-250"/> : <BsDot size={44} style={{color: "gray"}} className="transition ease-in-out duration-250"/>}
                {slide === 1 ? <BsDot size={44} style={{color: "white"}} className="transition ease-in-out duration-250"/> : <BsDot size={44} style={{color: "gray"}} className="transition ease-in-out duration-250"/>}
                {slide === 2 ? <BsDot size={44} style={{color: "white"}} className="transition ease-in-out duration-250"/> : <BsDot size={44} style={{color: "gray"}} className="transition ease-in-out duration-250"/>}
            </div>
        </>
    )
}