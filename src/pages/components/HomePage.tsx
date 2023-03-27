import HomePictures from "./widgets/home/HomePictures";
import MapsWidget from "./widgets/home/MapsWidget";
import SpotifyWidget from "./widgets/home/SpotifyWidget";
import StackWidget from "./widgets/home/StackWidget";
import WeatherWidget from "./widgets/home/WeatherWidget"
import DashboardWidget from "./widgets/home/DashboardWidget";

interface DarkModeProps {
    isDarkMode: boolean;
}


const HomePage = (props: DarkModeProps) => {

    const slides = ["pic1.png", "pic2.png", "pic3.png"]

    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-6">

            <div className="bg-[#333333] dark:bg-[#f3f3f3] dark:text-black text-white rounded-3xl p-6 row-span-1 col-span-2">
                <h1 className="font-bold text-5xl text-center p-4 text-transparent bg-clip-text bg-gradient-to-r from-[#c869ff] to-[#56ff80]">Jeffery Yong</h1>
                <h2 className="font-semibold text-xl text-center">Self-taught full-stack developer from The Netherlands</h2>
                <p className="text-center py-2">Hey! I'm Jeffery, and my goal is to work at a company where I can deliver business value while levelling up my skills as a developer. </p>
            </div>

            <div className="bg-[#333333] text-white rounded-3xl row-span-1 col-span-1 relative overflow-hidden">
                <HomePictures>
                    {slides.map((s) => (
                        <img src={s} alt="" className="rounded-3xl object-cover"/>
                    ))}
                </HomePictures>
            </div>

            <div className="bg-[#333333] text-white dark:bg-[#f3f3f3] dark:text-black rounded-3xl p-2 row-span-2 col-span-1">
                <StackWidget/>
            </div>

            <div className="bg-[#333333] text-white dark:bg-[#f3f3f3] dark:text-black rounded-3xl p-2 row-span-2 col-span-1">
                <DashboardWidget />
            </div>

            <div className="bg-[#333333] text-white rounded-3xl row-span-1 col-span-2 overflow-hidden relative">
                <MapsWidget isDarkMode={props}/>
            </div>

            <div className="bg-[#333333] text-white rounded-3xl p-2 row-span-1 col-span-1 bg-gradient-to-r from-[#43caff] to-[#0096b1]">
                <WeatherWidget/>
            </div>

            <div className="bg-[#333333] text-white dark:bg-[#f3f3f3] dark:text-black rounded-3xl p-2 px-4 row-span-1 col-span-2">
                <SpotifyWidget/>
            </div>

        </div>
    )
}

export default HomePage;