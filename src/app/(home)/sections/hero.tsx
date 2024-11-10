import GradientTitle from "@/components/shared/gradient-title";
import { FlipWords } from "@/components/ui/flip-words";
import { LucidePhoneCall } from "lucide-react";
import logo from "@/assets/logo.webp"
import Image from "next/image";
export default function HeroSection() {
    return (
        <div className="h-[80dvh] w-full flex flex-row gap-12 items-center justify-center ">
            <div className="flex flex-col text-start max-w-xl">
                <FlipWords className="font-bold text-2xl" words={["Guinchos 24H", "Atendemos toda a grande São Paulo", "Sempre com você", "Onde Precisar"]} />
                <GradientTitle className="text-6xl">
                    Encanto Guinchos
                </GradientTitle>
                <p className="text-lg font-medium text-justify px-2">
                    Serviço de guincho rápido e seguro em São Paulo. Com atendimento 24 horas e equipamentos modernos, garantimos o transporte confiável do seu veículo em qualquer situação.
                </p>
                <div className="flex flex-row gap-3 mt-4 px-2">
                    <div className="bg-primary text-white rounded-xl flex flex-row font-nunito font-medium items-center gap-3 w-fit py-2 px-3 ">
                        <img className="w-4 h-4" src="https://unpkg.com/simple-icons@v13/icons/whatsapp.svg" style={{ filter: 'invert(1)' }} /> Contato via WhatsApp
                    </div>
                    <div className="bg-background border border-primary text-primary rounded-xl flex flex-row font-nunito font-medium items-center gap-3 w-fit py-2 px-3 ">
                        <LucidePhoneCall className="w-4 h-4 text-primary" /> Ligar Agora
                    </div>
                </div>
            </div>
            <Image src={logo} alt="logo" />
        </div>
    )
}