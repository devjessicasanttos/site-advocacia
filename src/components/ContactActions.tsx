import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, Calendar, ArrowRight, Instagram, Clock, MapPin } from "lucide-react";

const contactMethods = [
  {
    title: "WhatsApp Express",
    description: "Atendimento imediato para dúvidas urgentes e agendamentos rápidos.",
    icon: MessageSquare,
    action: "Falar no WhatsApp",
    color: "bg-green-600",
    link: "https://wa.me/5511958775594?text=Olá%20Dra.%20Tamires,%20preciso%20de%20um%20atendimento%20urgente." 
  },
  {
    title: "Agendar Consultoria",
    description: "Reserve um horário exclusivo para uma reunião detalhada (Presencial ou Online).",
    icon: Calendar,
    action: "Ver Horários",
    color: "bg-amber-500",
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

        {/* Grade de Cards Principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
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
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl transition-all flex flex-col h-full group relative overflow-hidden ${
                  isWhatsApp 
                    ? "bg-white/10 border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]" 
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                {isWhatsApp && (
                  <span className="absolute top-4 right-4 bg-green-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest animate-pulse">
                    Mais Rápido
                  </span>
                )}

                <div className={`${method.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <method.icon className="text-white" size={24} />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isWhatsApp ? "text-green-400" : "text-white"}`}>
                  {method.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {method.description}
                </p>
                
                <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all group-hover:gap-4 ${isWhatsApp ? "text-green-400" : "text-amber-500"}`}>
                  {method.action} <ArrowRight size={18} />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Informações Complementares */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-7xl mx-auto"
        >
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/tm_juris?igsh=dXN5cmR2bTkxcjZz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
              <Instagram size={20} />
            </div>
            <div>
              <h4 className="font-bold text-white group-hover:text-amber-500 transition-colors">Instagram Profissional</h4>
              <p className="text-slate-400 text-sm">@tm_juris</p>
            </div>
          </a>

          {/* Horário */}
          <div className="flex items-start gap-4">
            <div className="bg-slate-700 p-3 rounded-lg">
              <Clock size={20} className="text-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-white">Horário de Atendimento</h4>
              <p className="text-slate-400 text-sm">Segunda a Sexta: 09h às 18h</p>
            </div>
          </div>

          {/* Endereço */}
          <div className="flex items-start gap-4">
            <div className="bg-slate-700 p-3 rounded-lg">
              <MapPin size={20} className="text-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-white">Escritório Físico</h4>
              <p className="text-slate-400 text-sm leading-snug">
                Rua Marim, 200 - Sala 04<br/>Colonial, São Paulo - SP
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactActions;