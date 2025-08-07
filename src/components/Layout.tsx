import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}