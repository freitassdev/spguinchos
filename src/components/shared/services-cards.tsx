import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { LucideBatteryCharging, LucideCarFront, LucideFuel, TriangleAlert } from "lucide-react";

export function ServicesCards() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ icon }: { icon: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.5] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] items-center justify-center  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    {icon}
  </div>
);
const items = [
  {
    title: "Guincho 24h em São Paulo e Região",
    description: "Serviço de Guincho 24h para toda a grande São Paulo, como guincho na Zona Leste, guincho no Centro de SP, guincho na Zona Sul, guincho na Grande SP e guincho na Zona Oeste.",
    header: <Skeleton icon={<TriangleAlert className="h-20 w-20 text-primary"  />} />,
    className: "md:col-span-2",
  },
  {
    title: "Carga na Bateria",
    description: "Serviço rápido de carga de bateria 24h para carros, motos e caminhões em São Paulo e região. Atendimento confiável para que você volte à estrada com segurança.",
    header: <Skeleton icon={<LucideBatteryCharging className="h-20 w-20 text-primary" />} />,
    className: "md:col-span-1",
  },
  {
    title: "Pane Seca",
    description: "Serviço de pane seca 24h em São Paulo e região para carros, motos e caminhões. Levamos combustível até você rapidamente onde estiver.",
    header: <Skeleton icon={<LucideFuel className="h-20 w-20 text-primary" />} />,
    className: "md:col-span-1",
  },
  {
    title: "Troca de Pneus",
    description: "Serviço de troca de pneus para carros, motos e caminhões em toda a grande São Paulo. Atendimento rápido e seguro para você seguir viagem sem preocupações.",
    header: <Skeleton icon={<LucideCarFront className="h-20 w-20 text-primary" />} />,
    className: "md:col-span-2",
  }
];