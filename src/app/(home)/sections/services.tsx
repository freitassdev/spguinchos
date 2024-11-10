import GradientTitle from "@/components/shared/gradient-title";
import { ServicesCards } from "@/components/shared/services-cards";

export default function ServicesSection() {
    return (
        <div>
            <div className="flex flex-col items-start justify-center py-16 space-y-8">
                <GradientTitle>
                    Nossos Serviços
                </GradientTitle>
                <ServicesCards />
            </div>
        </div>
    )
}