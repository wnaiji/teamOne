import { useState } from 'react'
import viteLogo from '/vite.svg'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

function ClickableMap() {
    console.log('clickMap');
    useMapEvents({
        click: async (e) => {
            const { lat, lng } = e.latlng;
            console.log(`You clicked the map at [${lat}, ${lng}]`);
            console.log("appeler");
            const formData = { lat, lng };
                try {
                    console.log('Response:', formData);
                    const response = await axios.post('http://localhost:3000/map', formData);
                } catch (error) {
                    console.error('Erreur lors de l\'envoi:', error);
                }
        },
    });
    return null;
}

function Map_Leaflet() {
    return (
        <>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '50vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickableMap />
            </MapContainer>
    </>
    );
}

export default Map_Leaflet;