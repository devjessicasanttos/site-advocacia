import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, Calendar, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    title: "WhatsApp Express",
    description: "Atendimento imediato para dúvidas urgentes e agendamentos rápidos.",
    icon: MessageSquare,
    action: "Falar no WhatsApp",
    color: "bg-green-600",
    // Link direto para o chat
    link: "https://wa.me/5511958775594?text=Olá%20Dra.%20Tamires,%20preciso%20de%20um%20atendimento%20urgente." 
  },
  {
    title: "Agendar Consultoria",
    description: "Reserve um horário exclusivo para uma reunião detalhada (Presencial ou Online).",
    icon: Calendar,
    action: "Ver Horários",
    color: "bg-amber-500",
    // Aqui incluímos uma mensagem específica de agendamento
    link: "https://wa.me/5511958775594?text=Olá%20Dra.%20Tamires,%20gostaria%20de%20verificar%20os%20horários%20disponíveis%20para%20uma%20consultoria." 
  },
  {
    title: "E-mail Profissional",
    description: "Para envio de documentos, propostas formais ou parcerias jurídicas.",
    icon: Mail,
    action: "Enviar E-mail",
    color: "bg-slate-800",
    link: "mailto:tamiresmoura.adv@gmail.com?subject=Consulta%20Jurídica%20-%20[Seu%20Nome]"
  },
  {
    title: "Ligação Direta",
    description: "Preferência por voz? Ligue em nosso horário comercial para atendimento.",
    icon: Phone,
    action: "Ligar Agora",
    color: "bg-slate-800",
    link: "tel:+5511958775594"
  }
];
const ContactActions = () => {
  return (
    <section 
      id="contato" 
      className="py-24 bg-[#1A2C4C] text-white scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Canais de Atendimento</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Escolha a forma mais confortável para iniciarmos sua orientação jurídica. 
          </p>
        </motion.div>

        {/* Grade de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contactMethods.map((method, index) => {
            const isWhatsApp = method.title === "WhatsApp Express";
            
            return (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl transition-all flex flex-col h-full group relative overflow-hidden ${
                  isWhatsApp 
                    ? "bg-white/10 border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)]" 
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {/* Badge de "Mais Rápido" para o WhatsApp */}
                {isWhatsApp && (
                  <span className="absolute top-4 right-4 bg-green-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest animate-bounce">
                    Mais Rápido
                  </span>
                )}

                <div className={`${method.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-xl ${isWhatsApp ? "animate-pulse" : ""}`}>
                  <method.icon className="text-white" size={28} />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isWhatsApp ? "text-green-400" : "text-white"}`}>
                  {method.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow text-justify">
                  {method.description}
                </p>
                
                <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all group-hover:gap-4 ${isWhatsApp ? "text-green-400" : "text-amber-500"}`}>
                  {method.action} <ArrowRight size={18} />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Rodapé da seção */}
        <motion.p className="text-center mt-16 text-slate-300">
          Utilize nosso sistema de{" "}
          <a href="#consultoria" className="text-amber-500 hover:underline font-bold">
            Consultoria Digital
          </a>.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactActions;