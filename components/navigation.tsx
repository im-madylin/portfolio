"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "소개", href: "#about" },
  { label: "기술스택", href: "#skills" },
  { label: "경력", href: "#experience" },
  { label: "교육", href: "#education" },
  { label: "자격증", href: "#certificates" },
  { label: "프로젝트", href: "#projects" },
  { label: "연락하기", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/80 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent",
      )}
    >
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Hahyun's portfolio
          </button>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "cursor-pointer text-sm font-medium transition-colors hover:text-primary",
                      activeSection === item.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">메뉴</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-card/95 backdrop-blur-md border-b border-border/50",
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "block w-full cursor-pointer text-left py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
