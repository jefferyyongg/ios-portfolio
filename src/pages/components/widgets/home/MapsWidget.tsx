import React, { useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"

interface DarkModeProps {
  isDarkMode: {
    isDarkMode: boolean,
  }
}

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiamVmZmVyeXlvbmciLCJhIjoiY2xmcHRram1iMTlmdTNxcDZuNjZta2FkbiJ9.DYmfy99yzrpWYHCPa8tyzg"

export default function MapsWidget(props: DarkModeProps) {
    const { isDarkMode } = props;

    const lng = 6.671938
    const lat = 52.350374

    const [map, setMap] = useState<mapboxgl.Map>()

    const setMapStyle = () => {
      const mapStyle = isDarkMode.isDarkMode ? "mapbox://styles/mapbox/light-v10" : "mapbox://styles/mapbox/dark-v10"
      return mapStyle
    }

    useEffect(() => {
      mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
      const newMap: mapboxgl.Map = new mapboxgl.Map({
        container: 'map', // container ID
        style: setMapStyle(), // style URL
        attributionControl: false,
        center: [lng, lat], // starting position [lng, lat]
        zoom: 13, // starting zoom
    })

    setMap(newMap)
    
    }, [isDarkMode])

    if(map) {
      map.loadImage("memio.png", (error, image) => {
        if (!image) return;

        map.addImage("memio", image);

        map.addSource("point", {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [lng, lat]
                },
                properties : {
                }
              }
            ]
          }
        })

      map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": "point",
        "layout": {
          "icon-image": "memio",
          "icon-size": 0.30
        }
      })
    })
  }
  
    return (
      <>
        <div>
          <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
          <link href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css" rel="stylesheet" />
        </div>
        <div 
        id="map" 
        style={{ 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            width: '100%' 
            }}>
        </div>
      </>
    );
}
