import { Separator } from "../ui/separator";

export default function HeroCards() {
    return (
        <div className="bg-card/60 border border-border shadow-2xl rounded-3xl p-5 min-h-96 grid grid-cols-3 gap-8">
            <div className="bg-background border border-border shadow-lg rounded-2xl py-5 px-6 flex flex-col gap-2">
                <h1 className="font-black text-2xl text-primary">Atendimento de Qualidade</h1>
                <Separator />
                <p className="text-md">
                    Nossa equipe está sempre pronta para atender com rapidez e eficiência. Garantimos suporte 24 horas para atender você em qualquer situação, oferecendo um atendimento personalizado e focado em resolver seu problema com agilidade.
                </p>
            </div>
            <div className="bg-background border border-border shadow-lg rounded-2xl py-5 px-6 flex flex-col gap-2">
                <h1 className="font-black text-2xl text-primary">Cobertura em Toda São Paulo</h1>
                <Separator />
                <p className="text-md">
                    Nossa empresa oferece cobertura em todas as regiões de São Paulo, tanto capital quanto interior. Esteja onde estiver, nossos guinchos estão prontos para chegar até você com rapidez e segurança.
                </p>
            </div>
            <div className="bg-background border border-border shadow-lg rounded-2xl py-5 px-6 flex flex-col gap-2">
                <h1 className="font-black text-2xl text-primary">Equipamentos de Última Geração</h1>
                <Separator />
                <p className="text-md">
                    Trabalhamos com guinchos e equipamentos de ponta para garantir a segurança e o transporte do seu veículo. Nossa frota é revisada regularmente, oferecendo confiança e tecnologia para um serviço de qualidade.
                </p>
            </div>
        </div>
    )
}