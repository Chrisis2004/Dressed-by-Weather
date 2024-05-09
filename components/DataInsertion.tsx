"use client";
import {NumberInput, SearchSelect, SearchSelectItem} from '@tremor/react';

export default function DataInsertion() {
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
                <form className="space-y-6" action="#" method="POST">
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
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={() => {
                                window.location.href = "http://localhost:3001/dressPage";
                            }}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            <p>Get dressed...</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
