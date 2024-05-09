"use client";
import {Card} from '@tremor/react';
import {
    RiCloudyFill,
    RiDrizzleFill,
    RiMistFill, RiRainyFill,
    RiSnowflakeFill,
    RiSunFill,
    RiThunderstormsFill
} from "@remixicon/react";
import MyMap from "@/components/MyMap";

export default function DressingPage() {
    const temperature = 23;
    const weather = "Rain";
    const position = {lat: 34, lng: 54};
    function getIconOfWeather(weather: string) {
        if (weather === "Clear") {
            return <RiSunFill className={"text-tremor-content-strong dark:text-dark-tremor-content-strong"}/>
        }
        if (weather === "Rain") {
            return <RiRainyFill className={"text-tremor-content-strong dark:text-dark-tremor-content-strong"}/>
        }
        if (weather === "Clouds") {
            return <RiCloudyFill className={"text-tremor-content-strong dark:text-dark-tremor-content-strong"}/>
        }
        if (weather === "Snow") {
            return <RiSnowflakeFill className={"text-tremor-content-strong dark:text-dark-tremor-content-strong"}/>
        }
        if (weather === "Drizzle") {
            return <RiDrizzleFill className={"text-tremor-content-strong dark:text-dark-tremor-content-strong"}/>
        }
        if (weather === "Thunderstorm") {
            return <RiThunderstormsFill className={"text-tremor-content-strong dark:text-dark-tremor-content-strong"}/>
        }
        if (weather === "Atmopshere") {
            return <RiMistFill className={"text-tremor-content-strong dark:text-dark-tremor-content-strong"}/>
        }
    }
    function textDressByWeather(weather: string, temperature: number) {
        if (weather === "Clear") {
            if (temperature >= 20) {
                return "Wear a t-shirt and long pants, maybe shorts if you feel like it";
            }
            if (temperature < 20) {
                return "Wear a t-shirt and a jacket, maybe a sweater if you feel like it";
            }
        }
        if (weather === "Rain") {
            if (temperature >= 20) {
                return "Wear a t-shirt and a jacket, and maybe a raincoat. Remember to bring an umbrella";
            }
            if (temperature < 20) {
                return "Wear a jumper and a jacket, and maybe a raincoat. Remember to bring an umbrella";
            }
        }
        if (weather === "Clouds") {
            if (temperature >= 20) {
                return "Wear a t-shirt and shorts or long pants";
            }
            if (temperature < 20) {
                return "Wear a t-shirt and a jacket, maybe a sweater if you feel like it";
            }
        }
        if (weather === "Snow") {
            if (temperature >= 20) {
                return "It's snowing and you're wearing shorts? Are you crazy? But there are more than 20°? Wear long pants and a jacket";
            }
            if (temperature < 20) {
                return "Wear a jumper and long pants, and maybe a jacket. Remember to bring an umbrella";
            }
        }
        if (weather === "Drizzle") {
            if (temperature >= 20) {
                return "Wear a t-shirt and shorts and maybe a jacket. Remember to bring an umbrella";
            }
            if (temperature < 20) {
                return "Wear a jumper and long pants, and maybe a jacket. Remember to bring an umbrella";
            }
        }
        if (weather === "Thunderstorm") {
            if (temperature >= 20) {
                return "Wear a t-shirt and bring a jacket. Remember to bring an umbrella";
            }
            if (temperature < 20) {
                return "Wear a jumper and long pants, and maybe a jacket. Remember to bring an umbrella";
            }
        }
    }

    return (
        <div className={" bg-gray-100 p-10 rounded-xl w-9/12"}>
            <h2 className="mt-2 text-center md:text-2xl sm:text-xl font-bold leading-9 tracking-tight text-gray-900">
                Get dressed... like this!
            </h2>

            <div className={"flex sm:flex-col lg:flex-row lg:mt-4 lg:p-2"}>
                <div className={"lg:w-1/2 lg:m-2 md:mx-2 sm:min-h-72 lg:min-h-56 "}>
                    <MyMap lat={position.lat} lng={position.lng}/>
                </div>

                <div className={"lg:w-1/2 flex flex-col md:ml:2"}>
                    <div className={"flex sm:flex-col md:flex-row"}>
                        <Card
                            className="md:m-2 sm:mt-2 min-h-24"
                        >
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Temperature</p>
                            <p className="md:text-3xl sm:text-xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{temperature}°</p>
                        </Card>
                        <Card
                            className="md:m-2 sm:mt-2 min-h-24"
                        >
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Weather</p>
                            {getIconOfWeather(weather)}
                        </Card>
                    </div>
                    <div className={"flex lg:mt-2"}>
                        <Card
                            className="md:m-2 sm:mt-2 min-h-24"
                        >
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Short day summary</p>
                            <p className="md:text-xl sm:text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Expect a day of partly cloudy with rain</p>
                        </Card>
                    </div>

                </div>
            </div>
            <div className={"flex lg:px-2"}>
                <Card
                    className="md:m-2 sm:mt-2"
                >
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">How to dress yourself</p>
                    <p className="md:text-xl sm:text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Expect a day of partly cloudy with rain dofjnsdiof dsf dsf dsf ds f dsf ds f ds  fds f ds f  d s f sd f  dsf sdf sdf  ds f ds f ds fs d f sd f dsfdsfdsfdsfdsf dsfdsf ds fds fs df dsfdsfsfdsfsd f sdfdsfdsfdsf dsfdsfdsfdsfdsfdsf sdfsdfdsfdsfdfvssfvsv fdsfds fsd fds fds fds fds f</p>
                </Card>
            </div>
        </div>
    )
        ;
}
