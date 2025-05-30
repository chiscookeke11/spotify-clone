"use client"


import React from "react";


interface InputProps {
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type?: string;
    label: string;
}

export const Inputs: React.FC<InputProps> = ({ id, value, label, onChange, type }) => {
    return (

        <div className="relative">
            <input id={id} value={value} type={type} onChange={onChange} className="block rounded-mg px-6 pt-6 pb-1 w-full text-base text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer " placeholder=" " />
            <label htmlFor={id} className="absolute text-base text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ">
                {label}
            </label>
        </div>
    );
};
