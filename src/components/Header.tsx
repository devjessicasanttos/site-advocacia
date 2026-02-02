import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom"; // Importamos o Link e useNavigate

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/areas", label: "Áreas de Atuação" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook para navegar programaticamente

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-card/95 backdrop-blur-md shadow-elegant py-3"
      : "bg-card py-5 border-b border-white/10" // Troquei transparent por bg-card (que é o seu branco/claro)
  }`}
>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Agora usando Link para voltar ao início */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-navy rounded-lg flex items-center justify-center shadow-elegant group-hover:shadow-gold transition-all duration-300">
              <Scale className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-bold text-primary leading-none">
                Dra. Tamires Moura
              </p>
              <p className="text-xs text-muted-foreground">Advogada</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-accent font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            {/* Botão para página de contato (ou âncora se estiver na home) */}
            <Button
              size="sm"
              className="bg-gradient-navy text-primary-foreground hover:opacity-90 shadow-elegant"
              onClick={() => navigate("/")} // Ou direcione para uma página específica de contato
            >
              Agende sua Consultoria
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-accent font-medium py-2 text-left transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-gradient-navy text-primary-foreground hover:opacity-90 mt-2"
                onClick={() => {
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
              >
                Agende sua Consultoria
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;