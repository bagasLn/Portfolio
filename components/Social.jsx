import Link from "next/link";
import {FaLinkedin, FaInstagram } from "react-icons/fa"


const socials = [
   {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/bagas-apriliani/"},
   {icon: <FaInstagram />, path: "https://www.instagram.com/bgasln_/"},
//    {icon: <FaMailBulk />, path: " "},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <>
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}   
        </div>
        </>
    );
}

export default Social;