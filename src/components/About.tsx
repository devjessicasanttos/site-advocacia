import { motion } from "framer-motion";
import { Scale, Heart, Shield, Award } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Scale, label: "Ética Profissional" },
    { icon: Heart, label: "Atendimento Humano" },
    { icon: Shield, label: "Segurança Jurídica" },
    { icon: Award, label: "Desde 2019" },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
              Conheça a Advogada
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Sobre <span className="text-gradient-gold">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl shadow-elegant hover:shadow-card transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-accent mb-2" />
                <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p className="text-justify">
              Sou advogada, formada desde 2019, com atuação pautada pela <strong className="text-foreground">ética, responsabilidade e comprometimento</strong> com a excelência jurídica. Ao longo da minha trajetória profissional, construí sólido conhecimento nas áreas mais relevantes do Direito, oferecendo soluções seguras, técnicas e personalizadas para cada cliente.
            </p>
            <p className="text-justify">
              Possuo ampla experiência no serviço extrajudicial, com destaque para a análise de instrumentos jurídicos, sempre buscando <strong className="text-foreground">prevenir conflitos e garantir segurança jurídica</strong> nas relações pessoais e patrimoniais. Atuo também nas áreas de Direito do Consumidor, Direito de Família e Direito Penal, prestando assessoria completa e estratégica em demandas que exigem sensibilidade, técnica e firmeza.
            </p>
            <p className="text-justify">
              Acredito que o exercício da advocacia vai além do conhecimento jurídico. Por isso, ofereço uma <strong className="text-foreground">consultoria humana</strong>, baseada na escuta atenta, no acolhimento e no respeito à individualidade de cada cliente. Meu compromisso é orientar com clareza, agir com transparência e buscar as melhores soluções jurídicas, sempre com <strong className="text-foreground">empatia e profissionalismo</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
