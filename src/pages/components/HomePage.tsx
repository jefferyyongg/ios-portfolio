import HomePictures from "./widgets/home/HomePictures";
import MapsWidget from "./widgets/home/MapsWidget";
import SpotifyWidget from "./widgets/home/SpotifyWidget";
import StackWidget from "./widgets/home/StackWidget";
import WeatherWidget from "./widgets/home/WeatherWidget"
import DashboardWidget from "./widgets/home/DashboardWidget";
import InfoWidget from "./widgets/home/InfoWidget";
import ProjectWidget from "./widgets/home/ProjectWidget";

const HomePage = () => {

    return (
        <div className="grid grid-cols-4 grid-rows-6 gap-6">

            <div className=" dark:text-black text-white rounded-3xl row-span-1 col-span-2">
                <InfoWidget/>   
            </div>

            <div className="bg-[#333333] text-white rounded-3xl row-span-1 col-span-1 relative overflow-hidden">
                <HomePictures/>
            </div>

            <div className="bg-[#333333] text-white dark:bg-[#f3f3f3] dark:text-black rounded-3xl p-2 row-span-2 col-span-1">
                <StackWidget/>
            </div>

            <div className="bg-[#333333] text-white dark:bg-[#f3f3f3] dark:text-black rounded-3xl p-2 row-span-2 col-span-1">
                <DashboardWidget />
            </div>

            <div className="bg-[#333333] text-white rounded-3xl row-span-1 col-span-2 overflow-hidden relative">
                <MapsWidget/>
            </div>

            <div className="bg-[#333333] text-white rounded-3xl p-2 row-span-1 col-span-1 bg-gradient-to-r from-[#43caff] to-[#0096b1]">
                <WeatherWidget/>
            </div>

            <div className="bg-[#333333] text-white dark:bg-[#f3f3f3] dark:text-black rounded-3xl p-2 px-4 row-span-1 col-span-2">
                <SpotifyWidget/>
            </div>

            <ProjectWidget/>

        </div>
    )
}

export default HomePage;