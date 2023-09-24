'use client'

import 'mapbox-gl/dist/mapbox-gl.css';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('react-map-gl'), { ssr: false });
import { NavigationControl }from 'react-map-gl'

export default function MapView() {
    return (
        <>
        <Map mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -115.17,
          latitude: 36.17,
          zoom: 11
        }}
        style={{width: '100wh', height: '50vh', borderRadius: '1rem', margin: '1rem'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        
        >
        <NavigationControl />
        </Map>
 </>   )
}


