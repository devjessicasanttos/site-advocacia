import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MessageSquare, CheckCircle, Clock, RefreshCw } from 'lucide-react';
import { toast } from "sonner"; // Importando o toast moderno

const AdminPainel = () => {
  const [perguntas, setPerguntas] = useState<any[]>([]);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [carregando, setCarregando] = useState(true);
  const [enviandoId, setEnviandoId] = useState<string | null>(null); // Estado para o loading do botão

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
    const textoResposta = respostas[id];

    if (!textoResposta || textoResposta.trim() === "") {
      toast.error("Escreva uma resposta antes de enviar!");
      return;
    }

    setEnviandoId(id); // Inicia o loading no botão

    const { error } = await supabase
      .from('perguntas')
      .update({ 
        resposta_advogado: textoResposta,
        status: 'respondida' 
      })
      .eq('id', id);

    if (error) {
      toast.error("Erro ao responder: " + error.message);
      setEnviandoId(null);
    } else {
      toast.success("Resposta enviada com sucesso!");
      
      // Limpa a resposta do estado para organizar as colunas
      const novasRespostas = { ...respostas };
      delete novasRespostas[id];
      setRespostas(novasRespostas);

      await buscarPerguntas(); // Recarrega a lista (move a pergunta de coluna)
      setEnviandoId(null); // Para o loading
    }
  };

  // Filtros de colunas
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
                  value={respostas[q.id] || ""}
                  onChange={(e) => setRespostas({...respostas, [q.id]: e.target.value})}
                />
                
                <button 
                  onClick={() => enviarResposta(q.id)}
                  disabled={enviandoId === q.id}
                  className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    enviandoId === q.id ? "bg-slate-400 cursor-not-allowed" : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {enviandoId === q.id ? <RefreshCw className="animate-spin" size={18} /> : <MessageSquare size={18} />}
                  {enviandoId === q.id ? "Enviando..." : "Enviar resposta!"}
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
                  value={respostas[q.id] !== undefined ? respostas[q.id] : q.resposta_advogado}
                  onChange={(e) => setRespostas({...respostas, [q.id]: e.target.value})}
                />
                
                <button 
                  onClick={() => enviarResposta(q.id)}
                  disabled={enviandoId === q.id}
                  className="text-blue-600 text-xs font-bold hover:underline flex items-center gap-1 disabled:text-slate-400"
                >
                  <RefreshCw size={12} className={enviandoId === q.id ? "animate-spin" : ""} /> 
                  {enviandoId === q.id ? "Atualizando..." : "Atualizar Resposta"}
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