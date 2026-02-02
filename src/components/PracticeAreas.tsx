import { motion } from "framer-motion";
import { ShoppingBag, Users, Gavel, FileText } from "lucide-react";

const practiceAreas = [
  {
    icon: ShoppingBag,
    title: "Direito do Consumidor",
    description: "Defesa clara e estratégica dos seus direitos contra abusos e cobranças indevidas.",
  },
  {
    icon: Users,
    title: "Direito de Família",
    description: "Soluções seguras e humanas para proteger vínculos e direitos familiares.",
  },
  {
    icon: Gavel,
    title: "Direito Penal",
    description: "Defesa ética e firme, acompanhando inquéritos, audiências e processos criminais.",
  },
  {
    icon: FileText,
    title: "Serviços Extrajudiciais",
    description: "Resolução rápida e segura de acordos, divórcios, partilhas e pactos, com orientação personalizada.",
  },
];

const PracticeAreas = () => {
  return (
    <section id="areas" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-accent rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/50 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
            Especialidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Áreas de <span className="text-gradient-gold">Atuação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Assessoria jurídica completa e especializada para proteger seus direitos em todas as esferas.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 shadow-elegant hover:shadow-card transition-all duration-500 border border-border/50 hover:border-accent/30 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-navy rounded-xl flex items-center justify-center shadow-elegant group-hover:shadow-gold transition-all duration-500 group-hover:scale-110">
                    <area.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {area.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
