"use client";
import DataInsertion from "@/components/DataInsertion";
import {useState} from "react";
import DressingPage from "@/components/DressingPage";

export default function Home() {
    const [lat, setLat1] = useState(0);
    const [lng, setLng1] = useState(0);
    const [temperature, setTemperature1] = useState(0);
    const [weather, setWeather1] = useState("");
    const [description, setDescription1] = useState("");

    function setLat(lat: number) {
        setLat1(lat);
    }
    function setLng(lng: number) {
        setLng1(lng);
    }
    function setTemperature(temperature: number) {
        setTemperature1(temperature);
    }
    function setWeather(weather: string) {
        setWeather1(weather);
    }
    function setDescription(description: string) {
        setDescription1(description);
    }



    if ( lat !== 0 && lng !== 0 && temperature !== 0 && weather !== "" && description !== "") {
        return (
            <main>
                <div className="flex min-h-screen flex-1 flex-col justify-center items-center">
                    <DressingPage lat={lat} lng={lng} temperature={temperature} weather={weather} description={description}/>
                </div>
            </main>
        );
    } else {
        return (
            <main>
                <div className="flex min-h-screen flex-1 flex-col justify-center items-center" id={"content"}>
                    <DataInsertion setLat={setLat} setLng={setLng} setTemperature={setTemperature} setWeather={setWeather} setDescription={setDescription}/>
                </div>
            </main>
        );
    }

}
