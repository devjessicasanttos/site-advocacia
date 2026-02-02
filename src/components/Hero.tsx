import { motion } from "framer-motion";
import tamiresPhoto from "@/assets/tamires-moura.jpeg";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 origin-top-right" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-6">
                Advocacia com Excelência
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight"
            >
              Dra. Tamires
              <span className="block text-gradient-gold">Moura</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Advogada atuante desde 2019, com compromisso ético e atendimento humanizado. Sua confiança é minha prioridade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
             <a 
  href="https://wa.me/5511958775594?text=Olá%20Dra.%20Tamires,%20gostaria%20de%20uma%20orientação%20jurídica." 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block"
>
  <Button
    size="lg"
    className="bg-gradient-navy text-primary-foreground hover:opacity-90 shadow-elegant transition-all duration-300 hover:shadow-card group"
  >
    <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
    Fale com a Dra. Tamires
  </Button>
</a>                                    
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-accent rounded-tr-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-accent rounded-bl-2xl" />
              
              <img
                src={tamiresPhoto}
                alt="Dra. Tamires Moura - Advogada"
                className="relative w-72 md:w-80 lg:w-96 h-auto rounded-xl shadow-card object-cover z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
