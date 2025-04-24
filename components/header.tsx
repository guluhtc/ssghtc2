"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-2" 
          : "py-4"
      )}
    >
      <div className="container">
        <div className={cn(
          "rounded-full border transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg"
            : "bg-background/50 backdrop-blur-sm"
        )}>
          <div className="px-4 sm:px-6 flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xl font-bold gradient-text">
                TechIGem
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link 
                href="#tools" 
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Tools
              </Link>
              <Link 
                href="#about" 
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link 
                href="#faq" 
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button 
                className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white"
              >
                Get Started
              </Button>
              
              {/* Mobile menu button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <nav className="rounded-lg border bg-background/80 backdrop-blur-md shadow-lg p-4 flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#tools" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                href="#about" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#faq" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}