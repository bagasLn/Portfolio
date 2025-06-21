"use client";

import { Description, Title } from "@radix-ui/react-dialog";

import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaPhp, FaFigma} from "react-icons/fa";



import { SiTailwindcss, SiNextdotjs, SiLaravel, SiCoreldraw, SiAdobephotoshop, SiGoogleads} from "react-icons/si";

//Data diri
const about = {
    title: 'About me',
    description : 'Hai, nama saya Bagas. Saya memiliki pengalaman di bidang IT, mulai dari IT support, pengembangan web, hingga desain grafis. Di setiap perjalanan saya, saya selalu berusaha memberikan yang terbaik dan memastikan sistem berjalan lancar, membuat website yang lebih efisen, atau memberikan solusi digital untuk tim. Saya juga senang belajar hal baru, menghadapi berbagai challenge, bagi saya setiap proyek adalah kesempatan untuk berkembang dan memberikan kontribusi yang berarti. karena saya percaya bahwa kolaborasi yang baik akan menghasilkan hasil yang lebih maksimal.',
    info: [
        {
            fieldName: "Name",
            filedValue: "Bagas Apriliani",
        },
        {
            fieldName: "Phone",
            filedValue: "+62 853 8052 7774 ",
        },
        {
            fieldName: "Email",
            filedValue: "bagasaprilian111@gmail.com",
        },
    ]
};

//Pengalaman
const experience = {
    icon: '',
    title: "My Experience",
    description: "",
    items: [
        {
            company: "PT Bank Mandiri (Persero)",
            position: "IT Infrastructure",
            jobdescription: "Branch Data System | Environment testing | Release Control Board",
            duration: "September 2024 - Present",
        },
        {
            company: "DNA Indonesia",
            position: "Web Developer",
            jobdescription: "maintenance | Build | Updates website",
            duration: "Mei 2024 - Juli 2024",
        },
        {
            company: "PT. Sumber Display Dunia",
            position: "Digital Support",
            duration: "Juni 2023 - Mei 2024",
        },
        {
            company: "ATR/BPN Jakarta Timur",
            position: "IT Support [Intern]",
            duration: "Januari 2023 - Mei 2024",
        },
        {
            company: "Sahabat Printing",
            position: "Design Graphic",
            duration: "September 2019 - Juni 2021",
        },
        
    ],
};

//Pendidikan
const education = {
    icon: '',
    title: "My Education",
    description: "",
    items: [
        {
            institution: "Online Course Platform",
            degree: "Full Stack Web Developer JavaScript",
            duration: "2024 - Present",
        },
        {
            institution: "STMIK Pringsewu | IBN Lampung",
            degree: "Bachelor of Information Systems",
            duration: "Agustus 2018 - Juni 2022",
        },
        {
            institution: "SMAN 01 Kalirejo",
            degree: "IPS | Social science",
            duration: "Juni 2015 - Mei 2018",
        },
        
        
    ],
};

//Skill
const skills = {
    title: "my Skills",
    description : "",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaPhp />,
            name: "php"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiLaravel />,
            name: "Laravel"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwiind.css"
        },
        {
            icon: <FaBootstrap />,
            name: "bootstrap"
        },
        {
            icon: <FaFigma />,
            name: "figma"
        },
        {
            icon: <SiCoreldraw/>,
            name: "Corel Draw"
        },
        {
            icon: <SiAdobephotoshop />,
            name: "PhotoShop"
        },
        {
            icon: <SiGoogleads />,
            name: "Google Ads"
        },
        
    
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
    return (
        <>
        <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration:0.4, ease: "easeIn"}
            }} 
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        > 
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">

                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">  
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return ( 
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}
                                                    <p className="text-xs max-w-[260px] min-h-[60px] text-center lg:text-left">{item.jobdescription}</p>
                                                </h3>
            
                                                <div  className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>

                            </div>  
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">  
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return ( 
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div  className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 text-sm">{item.institution}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>

                            </div>  
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            
                                     <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                        {skill.icon}
                                                    </div>
                                                </TooltipTrigger>
                                                    <TooltipContent >
                                                        <p>{skill.name}</p>
                                                    </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                     </li>
                                        );
                                   })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.filedValue }</span>
                                         </li>
                                        ) 
                                    })}
                                </ul>
                            </div>
                         
                        </TabsContent>

                        
                        

                    </div>
                </Tabs>


            </div>

            </motion.div>
        </>
    )
}

export default Resume;