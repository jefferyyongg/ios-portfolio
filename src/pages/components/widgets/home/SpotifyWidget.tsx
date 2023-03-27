import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

export default function SpotifyWidget() {

    const [track, setTrack] = useState({
        imageUrl: "",
        name: "",
        artist: ""
      });

    const spotifyData = api.spotify.getRecentlyPlayed.useQuery()
    const { data: tracks, isLoading } = spotifyData

    useEffect(() => {
        if (tracks && tracks[0]) {
          const { name, artist, imageUrl } = tracks[0];
          setTrack({ name, artist, imageUrl });
        }
      }, [tracks]);
      
      if (isLoading) {
        return <div>Loading...</div>;
      }

    return (
        <div className="flex px-2 py-4 space-x-12">
            <img src={track.imageUrl} alt="" width={250} className="rounded-2xl " />

            <div className="">
                <div className="pb-28">
                    <img src="spotify_icon.png" alt="" width={56}/>
                </div>
                
                <div className="leading-5">
                    <div className="animation-container">
                        <div className="spotify-animation-1"></div>
                        <div className="spotify-animation-2"></div>
                        <div className="spotify-animation-3"></div>
                        <h2 className="text-transparent bg-clip-text bg-green-500 font-semibold px-1">Last Played</h2>
                    </div>
                    <h2 className="font-bold text-3xl">{track.name}</h2>
                    <h2 className="">{track.artist}</h2>
                </div>

            </div>
        </div>
    )
}