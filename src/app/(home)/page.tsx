import Navbar from "@/components/shared/navbar";
import HeroSection from "./sections/hero"
import HeroCards from "@/components/shared/hero-cards";
import { Separator } from "@/components/ui/separator";
import ServicesSection from "./sections/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full mx-auto max-md:w-full md:w-[600px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1300px]">
        <div className="absolute -z-10 inset-0  h-[600px] w-full bg-transparent opacity-100 dark:opacity-5  bg-[linear-gradient(to_right,#c3c3c3_1px,transparent_1px),linear-gradient(to_bottom,#c3c3c3_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="flex flex-col gap-3">
          <HeroSection />
          <HeroCards />
          <Separator className="mb-5 mt-5" />
          <ServicesSection />
        </div>
      </div>
    </div>
  );
}
