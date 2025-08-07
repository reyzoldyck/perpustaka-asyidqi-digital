import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  GraduationCap,
  Globe,
  Library,
  ChevronDown,
  User,
} from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const mainNavItems = [
  { name: "Beranda", path: "/", icon: BookOpen },
  { name: "Rak Buku", path: "/rak-buku", icon: Library },
];

const visitNavItems = [
  {
    name: "Kunjungan Siswa",
    path: "/kunjungan-siswa",
    icon: GraduationCap,
    description: "Daftar kunjungan siswa ke perpustakaan",
  },
  {
    name: "Kunjungan Guru",
    path: "/kunjungan-guru",
    icon: Users,
    description: "Daftar kunjungan guru ke perpustakaan",
  },
  {
    name: "Kunjungan Umum",
    path: "/kunjungan-umum",
    icon: Globe,
    description: "Daftar kunjungan umum ke perpustakaan",
  },
];

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisitMenuOpen, setIsVisitMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="container mx-4 mt-4 flex h-16 items-center justify-between rounded-2xl bg-background/80 px-6 backdrop-blur-md transition-all sm:mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="perpustakaan"
            className="h-8 w-auto lg:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden h-full items-center gap-1 lg:flex">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "hero" : "ghost"}
                  className={`flex items-center gap-2 text-base ${
                    isActive ? "font-semibold" : "font-medium"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Button>
              </Link>
            );
          })}

          {/* Kunjungan Dropdown */}
          <div
            className="group relative flex h-full cursor-pointer items-center"
            onMouseEnter={() => setIsVisitMenuOpen(true)}
            onMouseLeave={() => setIsVisitMenuOpen(false)}
          >
            <Button
              variant={
                visitNavItems.some((item) => location.pathname === item.path)
                  ? "hero"
                  : "ghost"
              }
              className="flex items-center gap-2 text-base font-medium"
              onClick={() => setIsVisitMenuOpen(!isVisitMenuOpen)}
            >
              <Globe className="h-4 w-4" />
              <span>Kunjungan</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isVisitMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>

            {isVisitMenuOpen && (
              <div className="absolute -left-[570px] right-0 top-full mx-auto w-[1100px]  animate-navbar rounded-xl p-3 transition-all group-hover:block">
                <div className="rounded-2xl border border-border bg-background p-6 shadow-lg backdrop-blur-sm">
                  <h2 className="mb-6 text-2xl font-bold text-primary">
                    Menu Kunjungan
                  </h2>
                  <div className="flex  gap-4">
                    {visitNavItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link key={item.path} to={item.path}>
                          <Button
                            variant={`${isActive ? "hero" : "ghost"}`}
                            className={`flex h-full w-full flex-col items-start gap-4 p-5 text-left transition-all hover:shadow-md hover:bg-muted hover:border-none  ${
                              isActive
                                ? "border-2 border-primary text-white"
                                : "hover:border hover:border-accent"
                            }`}
                          >
                            <div className={`rounded-full p-3 bg-muted`}>
                              <Icon
                                className={`h-6 w-6 ${
                                  isActive ? "text-primary" : "text-white"
                                }`}
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <h4
                                className={`text-lg font-semibold ${
                                  isActive
                                    ? "text-black"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {item.name}
                              </h4>
                              <p
                                className={`text-sm ${
                                  isActive
                                    ? "text-black"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {item.description}
                              </p>
                            </div>
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Login Button - Desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/login">
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-96">
            <div className="flex flex-col gap-4 pt-8">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant={isActive ? "hero" : "ghost"}
                      className="w-full justify-start border-b border-border py-4"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}

              {/* Mobile Visit Dropdown */}
              <div className="flex flex-col border-b border-border pb-4">
                <Button
                  variant={
                    visitNavItems.some(
                      (item) => location.pathname === item.path
                    )
                      ? "hero"
                      : "ghost"
                  }
                  className="flex w-full items-center justify-between py-4"
                  onClick={() => setIsVisitMenuOpen(!isVisitMenuOpen)}
                >
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Kunjungan
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isVisitMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {isVisitMenuOpen && (
                  <div className="ml-6 mt-2 flex flex-col gap-2 rounded-lg bg-muted/50 p-2">
                    {visitNavItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                            setIsOpen(false);
                            setIsVisitMenuOpen(false);
                          }}
                        >
                          <Button
                            variant={isActive ? "hero" : "ghost"}
                            className="w-full justify-start px-4 py-3"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`rounded-lg p-2 ${
                                  isActive ? "bg-primary/10" : "bg-muted"
                                }`}
                              >
                                <Icon
                                  className={`h-5 w-5 ${
                                    isActive
                                      ? "text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              </div>
                              <div className="text-left">
                                <p
                                  className={`font-medium ${
                                    isActive
                                      ? "text-primary"
                                      : "text-foreground"
                                  }`}
                                >
                                  {item.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Login Button - Mobile */}
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Mobile Login Button (shown only on mobile when sheet is closed) */}
        <div className="hidden lg:hidden">
          <Link to="/login">
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
