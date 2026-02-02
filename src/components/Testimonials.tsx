import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Cliente",
    role: "Direito do Consumidor",
    content: "A Dra Tamires conduziu nosso inventário extrajudicial com muita eficiência e responsabilidade. Explicou tudo com paciência e resolveu o que parecia impossivel. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    id: 2,
    name: "Cliente", 
    role: "Extrajudicial - Extinção de contrato com cláusulas exorbitantes.",
    content: "Exelente profissional, super indico os serviços, além dos conhecimentos que a mesma possui é muito prestativa e o atendiment oao público(cliente) hoje faz toda a diferença, agilidade e conhecimento você encontra aqui.",
    rating: 5,
  },
  {
    id: 3,
    name: "Cliente", 
    role: "Direito do Consumidor",
    content: "Atendimento impecável da Dra Tamires! Me ajudou com uma questão de consumo e conseguiu resolver em tempo recorde. Estou muito satisfeito!",
    rating: 5,
  },
  {
    id: 4,
    name: "Cliente", 
    role: "Direito da Família",
    content: "Fui atendimento pela Dra Tamires e não poderia ter sido melhor. Profissional clara, competente e sempre atenciosa. Muito Obrigada pela ajuda.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confiou em nosso trabalho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name ? testimonial.name.charAt(0) : "C"} 
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name || "Cliente"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;