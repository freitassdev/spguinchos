'use client';
import Image from "next/image";
import logo from "@/assets/logo.webp"
import { LucidePhoneCall } from "lucide-react";
import { useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    scrollYProgress.on('change', (latest) => {
        if (latest > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });
    return (
        <div className={`w-full h-20 fixed z-50 flex flex-row justify-center transition-all duration-500 ${isScrolled && "bg-background/40 backdrop-blur-lg shadow-lg"}`}>
            <div className="h-full flex flex-row justify-between gap-3 items-center max-sm:mx-3 sm:mx-3 w-full md:w-[600px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1300px]">
                <div className="flex flex-row gap-12 items-center">
                    <Image className="h-14 w-auto" src={logo} alt="logo" />
                    <div className="flex flex-row items-center gap-7 font-medium">
                        <Link href="/">
                            <h1>INÍCIO</h1>
                        </Link>
                        <Link href="/">
                            <h1>SERVIÇOS</h1>
                        </Link>
                        <Link href="/">
                            <h1>SOBRE NÓS</h1>
                        </Link>
                        <Link href="/">
                            <h1>CONTATO</h1>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-5 font-nunito font-semibold">
                    <div className="bg-primary text-white rounded-full flex flex-row font-nunito font-medium items-center gap-3 py-2 px-7 ">
                        <LucidePhoneCall className="h-4 w-4" /> LIGUE AGORA
                    </div>
                </div>
            </div>
        </div>
    )
}