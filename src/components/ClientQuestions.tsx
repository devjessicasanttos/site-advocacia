import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MessageCircle, CheckCircle2, User, Clock } from 'lucide-react';

const ClientQuestions = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [historico, setHistorico] = useState([]);

  // Busca as perguntas respondidas ao carregar a página
  useEffect(() => {
    buscarPerguntas();
  }, []);

  const buscarPerguntas = async () => {
    const { data } = await supabase
      .from('perguntas')
      .select('*')
      .eq('status', 'respondida') // Só mostra o que a Dra. já respondeu
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
        pergunta_texto: pergunta 
      }]);

    if (error) {
      alert("Erro ao enviar: " + error.message);
    } else {
      alert("Sua dúvida foi enviada! Em breve a Dra. Tamires responderá e ela aparecerá aqui.");
      setNome(''); setEmail(''); setTelefone(''); setPergunta('');
    }
    setEnviando(false);
  };

  return (
    /* Adicionado o id="consultoria" para ligar com o link da seção de contato.
       Adicionado scroll-mt-32 para dar respiro quando a página rolar até aqui.
    */
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
                className="w-full p-3 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                value={nome} onChange={(e) => setNome(e.target.value)} required 
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="email" placeholder="E-mail" 
                  className="w-full p-3 border rounded-xl bg-slate-50 text-slate-900"
                  value={email} onChange={(e) => setEmail(e.target.value)} required 
                />
                <input 
                  type="tel" placeholder="WhatsApp" 
                  className="w-full p-3 border rounded-xl bg-slate-50 text-slate-900"
                  value={telefone} onChange={(e) => setTelefone(e.target.value)} required 
                />
              </div>
              <textarea 
                placeholder="Descreva sua situação jurídica..." 
                className="w-full p-3 border rounded-xl bg-slate-50 h-32 text-slate-900"
                value={pergunta} onChange={(e) => setPergunta(e.target.value)} required 
              />
              <button 
                disabled={enviando}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
              >
                {enviando ? 'Processando...' : 'Enviar para análise'}
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
              <div key={item.id} className="bg-white p-5 rounded-xl border-l-4 border-blue-600 shadow-sm">
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
  );
};

export default ClientQuestions;