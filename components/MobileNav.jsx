"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from "react-icons/ci" ;


const links = [
    {
        name: 'home',
        path: '/'
    },
    // {
    //     name: 'services',
    //     path: '/services'
    // },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact',
    },
]



const MobileNav = () => {
    const pathname = usePathname();
    return (    
        <>
            <Sheet>
            <SheetTrigger  className= "flex justify-center items-center bg-transparent">
                <CiMenuFries className= "text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col" >

                <div className="mt-12 mb-40 text-center text-2xl"> 
                    <Link href="/">
                        <h1 className="text-4x font-semibold">
                            Bagas<span className="text-accent">.</span></h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                        <Link href={link.path} key={index}
                        className={`${link.path === pathname && "text-accent"} text-xl capitalize hover:text-accent transition-all`} >
                        {link.name}
                        </Link>
                        );
                    })}
                </nav>
            </SheetContent>
            </Sheet>
        </>
    )
}

export default MobileNav;

/* menit  42:32  */