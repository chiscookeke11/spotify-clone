"use client"


import { Inputs } from "@/components/input";
import Image from "next/image";
import { useState } from "react";



const Page = () => {
    const [email, setEmail] = useState("")





    return (
        <div className="h-full relative w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover " >
            <div className="bg-black-200 h-full w-full  " >
                <nav className="px-12 py-5">
                    <Image src={"/images/logo.png"} alt="logo" height={100} width={100} className="h-12 " />

                </nav>

                <div className="flex justify-center" >
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full ">
                        <h2 className="text-white text-4xl mb-3 font-semibold " >Sign In</h2>

                        <div className="flex flex-col gap-4" >

                            <Inputs
                                label="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}


export default Page;