"use client";

import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

import { Button } from "@/components/ui/button";
import {FiDownload } from "react-icons/fi"

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  // let Words = [
  //   {
  //     text: "Hello",
  //   },
  //   {
  //     text: "I'm",
  //     className: "text-white-500 dark:text-white-500",
  //   },
  //   {
  //     text: "Junior",
  //   },
  //   {
  //     text: "Software",
  //   },
  //   {
  //     text: "Developer.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];

  return (
    <>
    <section className="h-full">
    <div className="container mx-auto h-full">
       <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
         
         <div className="text-center xl:text-left order-2 xl:order-none">
         <span className="text-center xl:text-left">
          Junior Software Developer
         </span>
         <h1 className="h1">Hello I'm <br /> <span className="text-accent">Bagas Apriliani</span>
         </h1>
         <p className="max-w-[500px] mb-9 text-white/80">
         seorang Junior  yang terus belajar | suka dengan front-end dan minat khusus
         di bagian back-end | terus eksplorasi teknologi modern agar tetap berkembang 🚀
         </p>
      <div className="flex flex-col xl:flex-row items-center gap-8">
           <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"size="lg" className="uppercase flex items-center gap-2">
              <span> Donwlaod CV</span>
              <FiDownload className="text-xl"></FiDownload>
            </Button>
            </a>
            
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex  gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
      </div>

         </div>
         


          <div className="order-1 xl:order-none mb-8 xl:mb-0">
           <Photo />
          </div>
      </div>
    </div>

    {/* <Stats /> Di hide sementara dulu */}
    </section>
    
    </>
  )
}



// export function TypewriterEffectDemo() {};
export default Home;

