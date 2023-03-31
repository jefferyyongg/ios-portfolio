import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight} from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { useState, FC } from "react";


const slides = ["pic1.png", "pic2.png", "pic3.png"];

const HomePictures: FC = (props) => {
    
    const [slide, setSlide] = useState(0);

    const prev = () => {
        setSlide((slide) => (slide === 0 ? slides.length - 1 : slide - 1))
    }

    const next = () => {
        setSlide((slide) => (slide === slides.length - 1? 0 : slide + 1))
    }

    return (
        <>
            <div
                className="flex transition-transform ease-out duration-500"
                style={{transform: `translateX(-${slide * 100}%)`}}
            >
                {slides.map((s, i) => (
                    <img src={s} alt="" key={i} className="rounded-3xl object-cover"/>
                ))}
            </div>
            <div className="absolute inset-0 flex justify-between items-center p-4 z-10">
                <button className="rounded-full bg-black opacity-50 p-1 hover:opacity-80 transition duration-250" onClick={prev}>
                    <FiChevronLeft size={32}/>
                </button>
                <button className="rounded-full bg-black opacity-50 p-1 hover:opacity-80 transition duration-250" onClick={next}>
                    <FiChevronRight size={32}/>
                </button>
            </div>
            <div className="absolute flex inset-0 items-end justify-center">
                {slides.map((_, i) => (
                    <BsDot
                    key={i}
                        size={44}
                        style={{ color: i === slide ? "white" : "gray" }}
                        className="transition ease-in-out duration-250"
                    />
                ))}
            </div>
        </>
    )
}

export default HomePictures;