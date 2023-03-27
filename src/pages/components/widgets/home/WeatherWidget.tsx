import { api } from "~/utils/api";
import { BsFillCloudSunFill } from "react-icons/bs"

export default function WeatherWidget() {
    const weatherData = api.weather.getWeather.useQuery({ key: "47cbec5a6b754190883161549232403", q: "Amsterdam" });
    const { data, isLoading } = weatherData;

    return (
        <div>
            {isLoading ? 
            <div></div> : 
                <div className="p-4">
                    <div>
                        <h1 className="font-bold text-3xl">{data.location.name}</h1>
                        <h1 className="font-semibold text-5xl flex">{data.current.temp_c}
                            <h2 className="font-bold text-2xl">°C</h2>
                        </h1>
                    </div>

                    <div className="pt-20">
                        <BsFillCloudSunFill size={56}/>
                        <h1 className="font-semibold text-xl">{data.current.condition.text}</h1>
                    </div>
                    
                </div>
            }
        </div>
    )
}