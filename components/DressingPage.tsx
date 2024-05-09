"use client";
import {Card, NumberInput, SearchSelect, SearchSelectItem} from '@tremor/react';
import {RiSunCloudyFill} from "@remixicon/react";

export default function DressingPage() {
    return (
        <div className={" bg-gray-100 p-10 rounded-xl w-9/12"}>
            <h2 className="mt-2 text-center md:text-2xl sm:text-xl font-bold leading-9 tracking-tight text-gray-900">
                Get dressed... like this!
            </h2>

            <div className={"flex sm:flex-col lg:flex-row lg:mt-4 lg:p-2"}>
                <div className={"lg:w-1/2 lg:m-2 lg:p-2 md:mx-2 bg-black sm:min-h-72 lg:min-h-56"}>
                    gfdgdfgdf
                </div>

                <div className={"lg:w-1/2 flex flex-col md:ml:2"}>
                    <div className={"flex sm:flex-col md:flex-row"}>
                        <Card
                            className="md:m-2 sm:mt-2 min-h-24"
                        >
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Temperature</p>
                            <p className="md:text-3xl sm:text-xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">23°</p>
                        </Card>
                        <Card
                            className="md:m-2 sm:mt-2 min-h-24"
                        >
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Temperature</p>
                            <RiSunCloudyFill className={"text-tremor-content-strong dark:text-dark-tremor-content-strong"}/>
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
