import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-primary-foreground">Dra. Tamires Moura</p>
              <p className="text-sm text-primary-foreground/60">Advocacia & Consultoria Jurídica</p>
            </div>
          </div>

          {/* OAB info */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              Advogada inscrita na OAB
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
