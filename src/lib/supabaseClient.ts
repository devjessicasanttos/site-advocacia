import { createClient } from '@supabase/supabase-js';

// O Vite busca os valores dentro do seu arquivo .env automaticamente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificação de segurança para te ajudar no console do navegador
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("⚠️ Erro: As chaves do Supabase não foram carregadas. Verifique seu arquivo .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);