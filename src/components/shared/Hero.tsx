import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function Hero({ title, subtitle, children, className = "" }: HeroProps) {
  return (
    <section className={`hero-gradient py-20 px-4 text-center animated-bg ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}