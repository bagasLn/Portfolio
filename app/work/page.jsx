"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import {BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";





const projects = [

    {
        num: "01",
        category: "ReactJs",
        title: "React",
        description:"",
        stack: [
            {name: "ReactJs"},
            {name: "Tailwind.css"},
            {name: "Html 5"}
        ], 
        image: "/assets/ReactJs.PNG",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "AJAX & WEb API",
        title: "project03",
        description:"",
        stack: [
            {name: "AJAX"},
            {name: "Web API"},
            {name: "Asynchronous JavaScript"}
        ], 
        image: "/assets/AjaxWebAPI.PNG",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "web bengkel mobil",
        title: "ibena wbsite",
        description:"",
        stack: [
            {name: "Html 5"}, 
            {name: "Css 3"},
            {name: "Javascript"},
        ], 
        image: "/assets/ibrena website.PNG",
        live: "",
        github: "",
    },
];



const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }


    return (
        <>
        <motion.section
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project diskripsi */}
                            <p className="text-white/60">{project.description}</p>

                            {/* stack yang dipilih */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name} 

                            {/* menghapus  perusahaan terakhir */}
                                        {index !== project.stack.length - 1 && "|"} 
                                        </li>
                                    );
                                })}
                            </ul>
                            
                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* button */}
                            {/* <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                             
                                        </TooltipTrigger>
                                        <TooltipContent>
                                        <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>

                                <Link href={project.github}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                              
                                        </TooltipTrigger>
                                        <TooltipContent>
                                        <p>Repo</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            </div> */}


                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12 "
                            onSlideChange={handleSlideChange}
                            >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        
                                        {/* overlay*/}
                                        <div className="absolute top-0 buttom-0 w-full h-full bg-black/10 z-10"></div>

                                        {/* Image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                            src={project.image}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                            alt="" 
                                            
                                            
                                            />
                                        </div>


                                    </div>     
                                    </SwiperSlide>
                                );
                            })}

                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyle="bg-accent/20 hover:bg-accent-hover rounded-lg text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
        </>
    )
}
export default Work;