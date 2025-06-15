"use client";

import React, { useRef } from 'react'; // Tambahkan useRef
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser'; // Import EmailJS


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";



const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'phone',
    description: '(+62) 853 8052 7774',
  },
  {
    icon: <FaEnvelope />,
    title: 'email',
    description: 'bagasaprilian111@gmail.com',
  },
];

const Contact = () => {
  const form = useRef(); // Inisialisasi useRef untuk form

  const sendEmail = (e) => {
    e.preventDefault(); // Mencegah form submit default

    emailjs
      .sendForm(
        'service_whllo4g', // Ganti dengan Service ID kamu
        'template_sgurbvu', // Ganti dengan Template ID kamu
        form.current, // Form yang akan dikirim
        'Z5LGyPwY0EzdS2XEN' // Ganti dengan User ID kamu
      )
      .then(
        (result) => {
          console.log('Email berhasil dikirim!', result.text);
          alert('email kamu berhasil di kirim, semoga beruntung!'); // Notifikasi jika berhasil
        },
        (error) => {
          console.error('Gagal mengirim email:', error.text);
          alert('Gagal mengirim pesan, coba lagi.'); // Notifikasi jika gagal
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form} // Hubungkan form dengan useRef
              onSubmit={sendEmail} // Tambahkan event handler untuk submit
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Lets go to work together</h3>
              <p className="text-white/50">
                Let’s turn your ideas into reality. Share your contact details, and let’s build something amazing together.
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" required />
                <Input type="text" name="lastname" placeholder="Lastname" required />
                <Input type="email" name="email" placeholder="Email address" required />
                <Input type="tel" name="phone" placeholder="Phone Number" required />
              </div>
              {/* Select Field */}
              <Select name="job">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select go Work together" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select go Work together</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                    <SelectItem value="IT Support">IT Support</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea Field */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here.."
                required
              />
              {/* Submit Button */}
              <Button type="submit" size="md" className="max-w-40">
                Send
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;