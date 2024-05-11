import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ lat, lng } : {lat: number, lng:number}) => {
    const [position, setPosition] = useState<[number, number]>([lat, lng]);
    function Mark() {
        const map = useMapEvents({
            click: ({latlng }) => {
                setPosition([latlng.lat, latlng.lng]);
            },
        });
        return <Marker position={position} />;
    }

    return (
        <MapContainer
            center={[position[0], position[1]]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Mark />
        </MapContainer>
    );
};

export default Map;