import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MessageCircle, CheckCircle2, User, Clock, Loader2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importando o Link para navegação
import { toast } from "sonner";

const ClientQuestions = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    buscarPerguntas();
  }, []);

  const buscarPerguntas = async () => {
    const { data } = await supabase
      .from('perguntas')
      .select('*')
      .eq('status', 'respondida')
      .order('created_at', { ascending: false })
      .limit(5);
    setHistorico(data || []);
  };

  const enviarMensagem = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    const { error } = await supabase
      .from('perguntas')
      .insert([{ 
        cliente_nome: nome, 
        cliente_email: email, 
        cliente_telefone: telefone, 
        pergunta_texto: pergunta,
        status: 'pendente' 
      }]);

    if (error) {
      toast.error("Erro ao enviar sua dúvida", {
        description: "Tente novamente em instantes ou nos chame no WhatsApp."
      });
    } else {
      toast.success("Consulta enviada com sucesso!", {
        description: "A Dra. Tamires analisará seu caso em breve.",
        duration: 5000,
      });

      setNome(''); 
      setEmail(''); 
      setTelefone(''); 
      setPergunta('');
    }
    setEnviando(false);
  };

  return (
    <>
      <section id="consultoria" className="py-20 bg-slate-50 scroll-mt-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Consultoria Jurídica Digital</h2>
            <p className="text-slate-600">Envie sua dúvida e acompanhe as respostas da Dra. Tamires Moura.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário de Envio */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="text-blue-600" /> Nova Consulta
              </h3>
              <form onSubmit={enviarMensagem} className="space-y-4">
                <input 
                  type="text" placeholder="Seu Nome completo" 
                  className="w-full p-3 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 transition-all"
                  value={nome} onChange={(e) => setNome(e.target.value)} required 
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="email" placeholder="E-mail" 
                    className="w-full p-3 border rounded-xl bg-slate-50 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={email} onChange={(e) => setEmail(e.target.value)} required 
                  />
                  <input 
                    type="tel" placeholder="WhatsApp" 
                    className="w-full p-3 border rounded-xl bg-slate-50 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={telefone} onChange={(e) => setTelefone(e.target.value)} required 
                  />
                </div>
                <textarea 
                  placeholder="Descreva sua situação jurídica..." 
                  className="w-full p-3 border rounded-xl bg-slate-50 h-32 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={pergunta} onChange={(e) => setPergunta(e.target.value)} required 
                />
                <button 
                  disabled={enviando}
                  className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                    enviando ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {enviando ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Processando...
                    </>
                  ) : (
                    'Enviar para análise'
                  )}
                </button>
              </form>
            </div>

            {/* Lista de Perguntas Respondidas */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <Clock className="text-amber-500" /> Consultas Recentes
              </h3>
              {historico.length === 0 && (
                <p className="text-slate-400 italic">As primeiras respostas aparecerão aqui em breve...</p>
              )}
              {historico.map((item: any) => (
                <div key={item.id} className="bg-white p-5 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-sm text-slate-500">
                    <User size={14} /> <span>{item.cliente_nome} perguntou:</span>
                  </div>
                  <p className="text-slate-800 font-medium mb-4 italic">"{item.pergunta_texto}"</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-1 text-blue-700 font-bold text-xs uppercase tracking-wider">
                      <CheckCircle2 size={14} /> Resposta Dra Tamires
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {item.resposta_advogado}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ COM ACESSO RESTRITO */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs mb-6 uppercase tracking-widest">
            © 2024 Dra. Tamires Moura - Advocacia e Consultoria
          </p>
          
          <Link 
            to="/admpainel" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-600 transition-all text-[10px] uppercase tracking-[3px] group"
          >
            <div className="w-7 h-7 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-slate-300 transition-all">
              <Lock size={12} />
            </div>
            Acesso Restrito
          </Link>
        </div>
      </footer>
    </>
  );
};

export default ClientQuestions;