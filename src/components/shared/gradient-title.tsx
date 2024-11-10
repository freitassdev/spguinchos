import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function GradientTitle({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h1 className={cn("lg:leading-[1.1] text-balance bg-gradient-to-br from-red-700 from-25% to-red-400 bg-clip-text px-2 text-5xl font-black leading-none tracking-tighter text-transparent dark:from-white dark:to-black", className)}>
            {children}
        </h1>
    )
}