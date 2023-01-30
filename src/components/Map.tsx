import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "../styles/components/Map.css"

interface Props {
    position: [number, number]
}

const Map = ({ position }: Props) => {
    const defaultCenter = position
    return (
        <div className='leaflet-container'>
            <MapContainer center={defaultCenter} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={defaultCenter}></Marker>
            </MapContainer>
        </div>
    )
}

export { Map }