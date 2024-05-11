"use client";
import {Button, Dialog, DialogPanel, NumberInput} from '@tremor/react';
import {useState} from "react";
import {RiLoader4Fill} from "@remixicon/react";

export default function DataInsertion(
    {setLat, setLng, setTemperature, setWeather, setDescription} : {
        setLat: (data : number) => void,
        setLng: (data : number) => void,
        setTemperature: (data : number) => void,
        setWeather: (data : string) => void,
        setDescription: (data : string) => void}) {

    const [dialogError, setDialogErrorOpen] = useState(false);
    const [zip, setZip] = useState('');


    function btLoading(trigger : boolean) {
        if (trigger) {
            document.getElementById('bt')?.children[0].classList.add('hidden');
            document.getElementById('bt')?.children[1].classList.remove('hidden');
        } else {
            document.getElementById('bt')?.children[0].classList.remove('hidden');
            document.getElementById('bt')?.children[1].classList.add('hidden');
        }
    }


    return (
        <div className={" bg-gray-100 p-10 rounded-xl"}>
            <div className=" bg-gray-100 sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto w-auto"
                    src="/Logo-Photoroom.png-Photoroom.png"
                    alt="Your Company"
                />
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="GET">
                    <div>
                        <label
                            htmlFor="zip"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Zip code
                        </label>
                        <div className="mt-2">
                            <NumberInput
                                id="zip"
                                name="zip"
                                enableStepper={false}
                                placeholder={"Write..."}
                                onInput={(e) => {setZip((e.target as HTMLInputElement).value)}}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={async (e) => {
                                e.preventDefault();
                                btLoading(true);
                                try {
                                    if (zip !== "") {
                                        const data = await (await fetch(`https://api.zippopotam.us/it/${zip}`)).json()
                                        let lat = data['places'][0]['latitude'];
                                        let lng = data['places'][0]['longitude'];
                                        const data1 = await( await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=` + lat + `&lon=` + lng +`&appid=d689c67d45f7cddead3c0767d6d5cb73&units=metric`)).json()
                                        setLat(lat);
                                        setLng(lng);
                                        setTemperature(data1['main']['temp']);
                                        setWeather( data1['weather'][0]['main']);
                                        setDescription( data1['weather'][0]['description']);
                                    }
                                }
                                catch (e : any){
                                    console.log(e);
                                    setDialogErrorOpen(true);
                                    btLoading(false);
                                }
                                btLoading(false);
                            }}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            <div id={"bt"}>
                                <p className={"visible"}>Get dressed...</p>
                                <RiLoader4Fill className={"hidden"} size={24}/>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            <Dialog open={dialogError} onClose={(val) => setDialogErrorOpen(val)} static={true}>
                <DialogPanel>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Somethings go wrong....</h3>
                    <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        The zip code you entered is not valid. Please check it and try again. Thank you.
                    </p>
                    <Button className="mt-8 w-full bg-red-600 border-0 hover:bg-red-500" onClick={() => setDialogErrorOpen(false)}>
                        Got it!
                    </Button>
                </DialogPanel>
            </Dialog>
        </div>
    );
}
