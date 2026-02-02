import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MessageSquare, CheckCircle, Clock, RefreshCw } from 'lucide-react';

const AdminPainel = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState({});
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarPerguntas();
  }, []);

  const buscarPerguntas = async () => {
    setCarregando(true);
    const { data } = await supabase
      .from('perguntas')
      .select('*')
      .order('created_at', { ascending: false });
    setPerguntas(data || []);
    setCarregando(false);
  };

  const enviarResposta = async (id: string) => {
    const { error } = await supabase
      .from('perguntas')
      .update({ 
        resposta_advogado: respostas[id],
        status: 'respondida' 
      })
      .eq('id', id);

    if (error) {
      alert("Erro ao responder: " + error.message);
    } else {
      alert("Resposta enviada com sucesso!");
      buscarPerguntas(); // Recarrega para mover a pergunta de coluna
    }
  };

  // Filtramos as perguntas em duas listas
  const novasPerguntas = perguntas.filter(p => p.status !== 'respondida');
  const respondidas = perguntas.filter(p => p.status === 'respondida');

  return (
    <div className="p-4 md:p-8 bg-slate-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Painel de Gestão Jurídica</h1>
            <p className="text-slate-500 text-sm">Olá, Dra. Tamires. Gerencie suas consultas aqui.</p>
          </div>
          <button onClick={buscarPerguntas} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <RefreshCw className={carregando ? "animate-spin" : ""} />
          </button>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* COLUNA 1: NOVAS PERGUNTAS */}
          <div className="space-y-4">
            <h2 className="flex items-center gap-2 text-amber-600 font-bold uppercase text-xs tracking-widest mb-4">
              <Clock size={16} /> Novas Perguntas ({novasPerguntas.length})
            </h2>
            
            {novasPerguntas.length === 0 && !carregando && (
              <div className="bg-white p-8 rounded-2xl text-center text-slate-400 border-2 border-dashed">
                Nenhuma pergunta nova no momento.
              </div>
            )}

            {novasPerguntas.map((q) => (
              <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-500">
                <div className="mb-4">
                  <span className="block font-bold text-slate-800">{q.cliente_nome}</span>
                  <span className="text-xs text-slate-500">{q.cliente_email} • {q.cliente_telefone}</span>
                </div>
                <p className="text-slate-700 bg-slate-50 p-4 rounded-xl mb-4 italic">"{q.pergunta_texto}"</p>
                
                <textarea 
                  className="w-full p-4 border rounded-xl mb-4 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  placeholder="Escreva sua orientação jurídica..."
                  rows={3}
                  onChange={(e) => setRespostas({...respostas, [q.id]: e.target.value})}
                />
                
                <button 
                  onClick={() => enviarResposta(q.id)}
                  className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} /> Enviar resposta!
                </button>
              </div>
            ))}
          </div>

          {/* COLUNA 2: JÁ RESPONDIDAS */}
          <div className="space-y-4">
            <h2 className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest mb-4">
              <CheckCircle size={16} /> Histórico de Respostas ({respondidas.length})
            </h2>

            {respondidas.map((q) => (
              <div key={q.id} className="bg-white/60 p-6 rounded-2xl shadow-sm border border-slate-200 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-bold text-slate-700">{q.cliente_nome}</span>
                    <p className="text-xs text-slate-500">Respondida em: {new Date(q.created_at).toLocaleDateString()}</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full">FINALIZADA</span>
                </div>
                
                <p className="text-slate-600 text-sm mb-4">P: {q.pergunta_texto}</p>
                
                <textarea 
                  className="w-full p-3 border rounded-lg bg-white mb-2 text-sm"
                  value={respostas[q.id] || q.resposta_advogado}
                  onChange={(e) => setRespostas({...respostas, [q.id]: e.target.value})}
                />
                
                <button 
                  onClick={() => enviarResposta(q.id)}
                  className="text-blue-600 text-xs font-bold hover:underline flex items-center gap-1"
                >
                  <RefreshCw size={12} /> Atualizar Resposta
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminPainel;