"use client";

import React from "react";
import Image from "next/image";
import { Social_Icons } from "@/constant";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[60px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image src="/Me.png" height={300} width={300} alt="Ibrahim Memon" />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1  transition  hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text  hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Piyawud Koonmanee
        </div>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate AI Researcher focusing on ML and CV.
        </p>
        <div className="pb-10 justify-center flex ">
          {Social_Icons.map((social) => {
            return (
              <Link
                href={social.link}
                rel="noopener noreferrer"
                target="_blank"
                key={social.alt}
                className="z-[1]"
              >
                <Image
                  src={social.image}
                  height={30}
                  width={30}
                  className="mx-5"
                  alt={social.alt}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
