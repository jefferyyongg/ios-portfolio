import { api } from "~/utils/api";
import { BsFillCloudSunFill } from "react-icons/bs"
import React, { useDebugValue } from "react";

export function useWeatherQuery() {
    const weatherData = api.weather.getWeather.useQuery({ key: "47cbec5a6b754190883161549232403", q: "Amsterdam" });

    useDebugValue(weatherData);

    return weatherData;
}

export default function WeatherWidget() {

    const { data, isLoading } = useWeatherQuery();
    

    return (
        <div>
            {isLoading ? 
            <div></div> : 
                <div className="p-4">
                    <div>
                        <h1 className="font-bold text-3xl">{data.location.name}</h1>
                        <div className="flex">
                           <h1 className="font-semibold text-5xl flex">{data.current.temp_c}</h1>
                            <h2 className="font-bold text-2xl">°C</h2> 
                        </div>
                        
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