import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/areas", label: "Áreas de Atuação" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5511958775594?text=Olá,%20Dra.%20Tamires.%20Gostaria%20de%20agendar%20uma%20consultoria.";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-elegant py-3" : "bg-card py-5 border-b border-white/10"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-navy rounded-lg flex items-center justify-center shadow-elegant group-hover:shadow-gold transition-all duration-300">
              <Scale className="w-5 h-5 text-primary-foreground" />
            </div>
            <p className="font-serif text-lg font-bold text-primary leading-none hidden sm:block">Dra. Tamires Moura</p>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-foreground/80 hover:text-accent font-medium transition-colors duration-300">{link.label}</Link>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-gradient-navy text-primary-foreground">Agende sua Consultoria</Button>
            </a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-card/95 border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/80 py-2">{link.label}</Link>
              ))}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-gradient-navy text-primary-foreground w-full">Agende sua Consultoria</Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;